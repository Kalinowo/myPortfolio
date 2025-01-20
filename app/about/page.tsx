import React from "react";
import Image from "next/legacy/image";
import gods from "@/public/gods.jpg";
import { RiGithubFill } from "react-icons/ri";

function About() {
  return (
    <div className="mx-auto h-screen max-w-7xl">
      <div className="relative flex flex-col pt-52 px-5 lg:p-52 w-full">
        <div className="absolute top-0 left-0 w-full lg:w-[50%] h-full z-[-1] hidden dark:block">
          <div className="relative h-full w-full lg:translate-x-[50%] translate-y-32 sm:-rotate-[30deg] opacity-30">
            <Image
              src={gods}
              alt="gods"
              className="absolute"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="relative flex justify-between items-center flex-row text-4xl">
          <span className="text-textPrimary dark:dark gradient-text">
            About
          </span>
          <a href="https://github.com/Kalinowo" target="_blank">
            <RiGithubFill className="text-textPrimary cursor-pointer" />
          </a>

          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gray-600"></div>
        </div>
        <div className="text-textPrimary text-xl pt-4 indent-5">
          我的名字是林楷又，是一位喜歡玩遊戲的Gameboy，第一個夢想是當上職業電競選手。
        </div>
        <div className="text-textPrimary text-xl pt-4 indent-5">
          2021年開始自學網頁開發，在這個終身學習(lifelong
          learning)的領域中，不斷挑戰、成長以及獲得成就感是我所追求的。能與電腦長時間工作也向來被我視為一種天賦，也是我所熱愛的事。網頁開發工程師是我的第二個夢想，在未來的道路，我將如同遊戲一般在這個領域，追求超神。
        </div>
      </div>
    </div>
  );
}

export default About;
