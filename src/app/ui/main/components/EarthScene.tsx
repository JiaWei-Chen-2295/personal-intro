"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error three.js-FBXLoader import error
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { AxesHelper, GridHelper } from "three";
import {getTheme} from "@/lib/ThemeUtils";

// 可配置参数
const Config = {
    model: {
        path: '/ThreeScenceModels/59-earth/earth 2.fbx',  // 模型路径
        // texture: '/ThreeScenceModels/59-earth/textures/earth albedo.jpg', // 白天纹理
        texture: '/ThreeScenceModels/59-earth/textures/夜景地球16384x8192.jpg', // 夜晚纹理
        textures: {
            'light': '/ThreeScenceModels/59-earth/textures/earth albedo.jpg',
            'dark': '/ThreeScenceModels/59-earth/textures/夜景地球16384x8192.jpg'
        },
        scale: 0.003,      // 模型缩放比例
        position: {        // 初始位置偏移
            x: -2,            // X轴偏移量
            y: 0,            // Y轴偏移量
            z: 0             // Z轴偏移量
        },
        offset: {          // 模型偏移量
            x: 0,            // X轴偏移量
            y: 0,            // Y轴偏移量
            z: 0             // Z轴偏移量
        },
        rotation: {        // 旋转配置
            speed: 0.01,     // 旋转速度
            axis: 'y'        // 旋转轴 (x/y/z)
        }
    },
    camera: {
        positionZ: 5       // 摄像机Z轴位置
    },
    helpers: {
        showGrid: false,    // 显示网格辅助线
        showAxes: false     // 显示坐标轴
    }
};

const EarthScene = () => {

    const theme = getTheme();
    console.log("theme", theme);
    const CONFIG = {
        ...Config,
        model: {
            ...Config.model,
            texture: theme === 'dark' ? Config.model.textures.dark : Config.model.textures.light
        }
    }
    const mount = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<THREE.Object3D | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const center = useRef<THREE.Vector3>(new THREE.Vector3());

    // 初始化场景
    const initScene = (width: number, height: number) => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = CONFIG.camera.positionZ;
        sceneRef.current = scene;
        cameraRef.current = camera;
        return { scene, camera };
    };

    // 初始化灯光
    const initLights = (scene: THREE.Scene) => {
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        [
            [10, 10, 10],
            [-10, 10, 10],
            [20, 20, 20]
        ].forEach(([x, y, z]) => {
            const light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(x, y, z);
            scene.add(light);
        });
    };

    // 初始化辅助工具
    const initHelpers = (scene: THREE.Scene) => {
        if (CONFIG.helpers.showAxes) scene.add(new AxesHelper(5));
        if (CONFIG.helpers.showGrid) scene.add(new GridHelper(10, 10));
    };

    // 加载模型
    const loadModel = (scene: THREE.Scene, width: number, height: number) => {
        new FBXLoader().load(
            CONFIG.model.path,
            (object: THREE.Object3D) => {
                console.log('Model loaded successfully:', object);

                const box = new THREE.Box3().setFromObject(object);
                center.current = box.getCenter(new THREE.Vector3());

                // 应用缩放
                object.scale.setScalar(CONFIG.model.scale);

                // 计算位置
                const scaledSize = box.getSize(new THREE.Vector3()).multiplyScalar(CONFIG.model.scale);
                const radius = Math.max(...Object.values(scaledSize)) / 2;

                // 调整模型位置，使其居中并相切于 div 的边框
                object.position.set(
                    CONFIG.model.position.x - center.current.x * CONFIG.model.scale + CONFIG.model.offset.x,
                    CONFIG.model.position.y - center.current.y * CONFIG.model.scale + CONFIG.model.offset.y,
                    CONFIG.model.position.z - center.current.z * CONFIG.model.scale + CONFIG.model.offset.z
                );

                // 应用材质
                const textureLoader = new THREE.TextureLoader();
                textureLoader.load(
                    CONFIG.model.texture,
                    (texture) => {
                        console.log('Texture loaded successfully');
                        object.traverse(child => {
                            if (child instanceof THREE.Mesh) {
                                child.material = new THREE.MeshPhongMaterial({
                                    map: texture,
                                    side: THREE.DoubleSide
                                });
                            }
                        });
                        scene.add(object);
                        modelRef.current = object;
                    },
                    (xhr) => {
                        console.log(`Texture loading progress: ${xhr.loaded / xhr.total * 100}%`);
                    },
                    (error) => {
                        console.log('Error loading texture:', error);
                    }
                );
            },
            (error: Error) => {
                console.log('Error loading FBX file:', error);
            }
        );
    };

    // 窗口大小变化处理
    const handleResize = (renderer: THREE.WebGLRenderer) => {
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                renderer.setSize(width, height);
                cameraRef.current!.aspect = width / height;
                cameraRef.current!.updateProjectionMatrix();

                if (modelRef.current) {
                    const box = new THREE.Box3().setFromObject(modelRef.current);
                    const scaledSize = box.getSize(new THREE.Vector3());
                    const radius = Math.max(...Object.values(scaledSize)) / 2;

                    // 重新计算模型位置
                    modelRef.current.position.x = CONFIG.model.position.x - center.current.x * CONFIG.model.scale + CONFIG.model.offset.x;
                    modelRef.current.position.y = CONFIG.model.position.y - center.current.y * CONFIG.model.scale + CONFIG.model.offset.y;
                }
            }
        });
        return resizeObserver;
    };

    useEffect(() => {
        if (!mount.current) return;

        const { clientWidth: width, clientHeight: height } = mount.current;
        const { scene, camera } = initScene(width, height);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);

        initLights(scene);
        initHelpers(scene);
        loadModel(scene, width, height);

        // 动画循环
        const animate = () => {
            requestAnimationFrame(animate);
            if (modelRef.current) {
                // @ts-ignore
                modelRef.current.rotation[CONFIG.model.rotation.axis] += CONFIG.model.rotation.speed;
            }
            renderer.render(scene, camera);
        };
        animate();

        const resizeObserver = handleResize(renderer);
        resizeObserver.observe(mount.current);

        return () => {
            mount.current?.removeChild(renderer.domElement);
            resizeObserver.unobserve(mount.current!);
        };
    }, []);

    return (
        <div
            ref={mount}
            className="min-w-full min-h-full opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
        />
    );
};

export default EarthScene;
