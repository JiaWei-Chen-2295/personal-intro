'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- Cinematic Atmosphere Shader ---
// Adjusted for a brighter, more "gem-like" cyan-blue glow
const vertexShader = `
varying vec3 vNormal;
void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec3 vNormal;
void main() {
    // Fresnel effect calculation
    float viewDirection = dot(vNormal, vec3(0.0, 0.0, 1.0));
    
    // Smoother falloff: higher power (4.5) creates a thinner, softer rim
    float intensity = pow(0.65 - viewDirection, 4.5);
    
    // BBC Planet Earth Style: Lighter, Cyan-Blue Atmosphere
    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0); 
    
    // Reduced multiplier slightly to avoid "neon ring" look against dark background
    gl_FragColor = vec4(atmosphereColor, 1.0) * intensity * 1.8;
}
`;

export const Earth3D: React.FC<{ className?: string }> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- 1. Scene & Cinematic Camera ---
    const scene = new THREE.Scene();
    
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.5); 

    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Tone Mapping adjusted for vibrant colors
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    mountRef.current.appendChild(renderer.domElement);

    // --- 2. Resources (Vibrant Blue Marble Set) ---
    const textureLoader = new THREE.TextureLoader();
    
    // Using high-saturation textures
    const earthMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    const earthBump = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png');
    const earthSpec = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-water.png');
    const earthClouds = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-clouds.png');
    
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = 15 * Math.PI / 180; 
    earthGroup.rotation.x = 10 * Math.PI / 180;
    scene.add(earthGroup);

    // --- 3. The Planet ---
    const geometry = new THREE.SphereGeometry(1, 128, 128);
    const material = new THREE.MeshPhongMaterial({
      map: earthMap,
      bumpMap: earthBump,
      bumpScale: 0.02, // Subtle physical texture
      specularMap: earthSpec, // Water reflection only
      specular: new THREE.Color(0x222222), // Controlled ocean reflection
      shininess: 15,
      color: 0xffffff, // Pure white base to let texture colors pop
    });
    const earth = new THREE.Mesh(geometry, material);
    earth.castShadow = true; 
    earth.receiveShadow = true; 
    earthGroup.add(earth);

    // --- 4. The Clouds (Whiter and Brighter) ---
    const cloudGeometry = new THREE.SphereGeometry(1.015, 128, 128);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: earthClouds,
      transparent: true,
      opacity: 1.0, // Full opacity for distinct white clouds
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
      alphaTest: 0.1,
      color: 0xffffff,
      shininess: 0, // Matte clouds
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.castShadow = true;
    clouds.receiveShadow = true;
    earthGroup.add(clouds);

    // --- 5. The Atmosphere ---
    const atmosphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // --- 6. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05); 
    scene.add(ambientLight);

    // Sun - Brighter and warmer
    const sunLight = new THREE.DirectionalLight(0xffffff, 4.0);
    sunLight.position.set(-5, 3, 2); 
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(2048, 2048);
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);
    
    // Rim Light - Cool Cyan to match atmosphere
    const rimLight = new THREE.SpotLight(0x00ccff, 12.0, 25, Math.PI / 3, 1, 1);
    rimLight.position.set(5, 2, -4);
    rimLight.lookAt(earth.position);
    scene.add(rimLight);

    // --- 7. Animation ---
    let animationId: number;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      earth.rotation.y += 0.0003;
      clouds.rotation.y += 0.00035; 
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};
