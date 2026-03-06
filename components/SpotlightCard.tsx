"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
      whileHover={{ y: -5 }}
      className="relative flex flex-col h-full p-8 overflow-hidden transition-colors border shadow-xl group rounded-2xl bg-slate-900/30 backdrop-blur-sm border-white/5 hover:border-cyan-500/30"
    >
      {/* The Flashlight Effect */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}