"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import useMousePosition from "@/lib/useMousePosition";
import Kygore from "@/components/ui/kygore";

export default function Template({ children }: { children: React.ReactNode }) {
  const { x, y } = useMousePosition();
  const [cursorVariant2, setCursorVariant] = useState("default");
  const variants = {
    default: {
      x: x - 4,
      y: y - 4,
    },
  };
  const variants2 = {
    default: {
      x: x - 20,
      y: y - 20,
    },
    click: {
      scale: 2,
      x: x - 20,
      y: y - 20,
    },
  };

  useEffect(() => {
    const mouseClick = () => {
      setCursorVariant("click");
    };

    const mouseRelease = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mousedown", mouseClick);
    window.addEventListener("mouseup", mouseRelease);
    return () => {
      window.removeEventListener("mousedown", mouseClick);
      window.removeEventListener("mouseup", mouseRelease);
    };
  }, [cursorVariant2]);
  return (
    <>
      {/* mouse tracker */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 bg-zinc-300 rounded-full pointer-events-none z-50"
        variants={variants}
        animate="default"
      ></motion.div>
      <motion.div
        className="fixed top-0 left-0 h-10 w-10 border border-zinc-300 rounded-full pointer-events-none z-50"
        variants={variants2}
        animate={cursorVariant2}
      ></motion.div>
      {/* page transition */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ type: "linear", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
