import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Only trigger animation once when element comes into view
  const isInView = useInView(svgRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // Disable hover effects during the initial stroke animation + short delay
    // Only start the timer when animation actually begins (isInView becomes true)
    if (isInView) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 4300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => !isAnimating && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && !isAnimating && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Layer 1: Ghost/Opacity text (Visible on hover only) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-sans text-5xl font-bold dark:stroke-neutral-500"
        style={{ opacity: hovered && !isAnimating ? 0.7 : 0 }}
      >
        {text}
      </text>

      {/* Layer 2: Main Animation Text (Stroke -> Solid Fill) */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-sans text-5xl font-bold stroke-neutral-200 dark:stroke-neutral-500"
        style={{ fill: "rgba(255, 255, 255, 0.9)" }}
        initial={{ strokeDashoffset: 4000, strokeDasharray: 4000, fillOpacity: 0, strokeOpacity: 1 }}
        animate={isInView ? {
          strokeDashoffset: 0,
          strokeDasharray: 4000,
          fillOpacity: 1,
          strokeOpacity: 0,
        } : {
          strokeDashoffset: 4000,
          strokeDasharray: 4000,
          fillOpacity: 0,
          strokeOpacity: 1,
        }}
        transition={{
          strokeDashoffset: { duration: 6, ease: "easeInOut" },
          fillOpacity: { duration: 1, ease: "easeInOut", delay:2 },
          strokeOpacity: { duration: 1, ease: "easeInOut", delay: 2 },
        }}
      >
        {text}
      </motion.text>

      {/* Layer 3: Spotlight Gradient Stroke (Overlay) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-5xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
