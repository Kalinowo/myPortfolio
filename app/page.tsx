import Hero from "@/components/home/Hero";
import React from "react";
import Dark_Background from "@/components/home/Dark_Background";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <Dark_Background />
      <div className="absolute w-full h-full top-0 left-0 opacity-20"></div>
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
