'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("陈佳玮");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setIsVisible(false);
      
      // Wait for exit animation to finish, then swap text and start enter animation
      setTimeout(() => {
        setDisplayText((prev) => (prev === "陈佳玮" ? "JavierChen" : "陈佳玮"));
        setIsVisible(true);
      }, 500); // Matches the duration-500 class
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
      {/* Spacer for Earth Graphic on Left */}
      <div className="hidden md:block md:col-span-5 lg:col-span-6"></div>

      {/* Text Content Right Aligned */}
      <div className="col-span-1 md:col-span-7 lg:col-span-6 mt-20 md:mt-0">
        <CardContainer containerClassName="block" className="block">
          <CardBody className="relative group/card w-full">
            <div className="flex flex-col items-end md:items-start space-y-8">
              
              {/* Badge */}
              <CardItem translateZ="50" className="w-full flex justify-end md:justify-start">
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full animate-pulse-slow hover:bg-white/10 transition-colors cursor-default">
                  <img 
                    alt="Paper Plane Icon" 
                    className="w-5 h-5 opacity-90" 
                    src="/icon.png"
                  />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-300">This is</span>
                </div>
              </CardItem>

              {/* Headlines */}
              <CardItem translateZ="80" className="w-full flex flex-col items-end md:items-start">
                <div className="space-y-2 text-right md:text-left">
                  <h2 className="text-6xl md:text-8xl font-black text-white min-h-[1.1em] flex items-center justify-end md:justify-start">
                    <span 
                      className={`inline-block transition-all duration-500 ease-out transform ${
                        isVisible 
                          ? 'opacity-100 translate-y-0 blur-0 scale-100' 
                          : 'opacity-0 translate-y-4 blur-sm scale-95'
                      }`}
                    >
                      {displayText}
                    </span>
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] pb-1">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">的个人主页</span>
                  </h1>
                </div>
              </CardItem>

              {/* Description */}
              <CardItem translateZ="60" className="w-full flex justify-end md:justify-start">
                <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl leading-relaxed text-right md:text-left">
                  一个喜欢钻研业务逻辑，写出漂亮界面的 <span className="text-primary font-bold">攻城狮</span>。
                  致力于将复杂的技术转化为优雅的用户体验。
                </p>
              </CardItem>

              {/* CTA Buttons */}
              <CardItem translateZ="40" className="w-full">
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full md:w-auto justify-end md:justify-start">
                  <a 
                    href="#projects" 
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center group"
                  >
                    查看我的项目
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="https://www.yuque.com/javierchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold rounded-full transition-all hover:-translate-y-1 text-center"
                  >
                    关于我
                  </a>
                </div>
              </CardItem>
              
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};
