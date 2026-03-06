"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Track exact mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply spring physics for the outer ring (smooth trailing effect)
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Only show custom cursor on devices with a real mouse
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor if hovering over a link, button, or specific classes
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") // Expands on project cards too!
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner solid dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer spring-animated glowing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99] border shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          borderColor: isHovering ? "rgba(34, 211, 238, 0.8)" : "rgba(34, 211, 238, 0.3)",
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}