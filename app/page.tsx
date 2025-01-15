"use client";
import Hero from "@/components/Hero";
import React from "react";
import { motion } from "framer-motion";
import Kygore from "@/components/ui/kygore";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <motion.div
        className="absolute w-full h-full dark:flex justify-center items-center duration-500 hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <Kygore />
      </motion.div>
      <div className="absolute w-full h-full top-0 left-0 opacity-20"></div>
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
