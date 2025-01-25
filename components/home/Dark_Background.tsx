"use client";
import React from "react";
import { motion } from "framer-motion";
import Kygore from "@/components/home/Kygore";

function Dark_Background() {
  return (
    <motion.div
      className="absolute w-full h-full dark:flex justify-center items-center duration-500 hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <Kygore />
    </motion.div>
  );
}

export default Dark_Background;
