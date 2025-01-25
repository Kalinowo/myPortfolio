import React from "react";
import { TextGenerateEffect } from "@/components/home/TextGenerateEffect";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi, I'm Kevin Alan Lin"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center text-textPrimary md:tracking-wider mb-4 text-xl md:text-2xl lg:text-4xl dark:dark gradient-text">
            front-end <span className="text-yellow-50">web developer</span>
          </p>
          <div className="w-full flex flex-row justify-center  gap-10 text-textPrimary text-xl">
            <div className="flex flex-row items-center gap-1 cursor-pointer  hover:text-white overflow-hidden group">
              <AiOutlineArrowUp className="group-hover:rotate-90 duration-500  dark:text-white" />
              <Link href="/work" className="dark:text-white">
                see my projects
                <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 dark:dark gradient-bg"></div>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-1 cursor-pointer  hover:text-white overflow-hidden group">
              <AiOutlineArrowUp className="group-hover:rotate-90 duration-500 dark:text-white" />
              <Link href="/about" className="dark:text-white">
                more about me
                <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 dark:dark gradient-bg"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
