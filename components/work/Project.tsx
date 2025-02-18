"use client";
import React, { useState } from "react";
import { workLists } from "@/data";
import TechStack from "./TechStack";
import { HiOutlineExternalLink } from "react-icons/hi";
import Embla from "./Embla";

interface ProjectProps {
  projectName: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { projectName } = props;
  const [titleModal, setTitleModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getProject = workLists.find((data) => data.name === projectName);

  const slides = workLists.find(
    (data) => data.name === projectName
  )?.extraPhoto;

  return (
    <>
      {titleModal && (
        <div
          onClick={() => setTitleModal(false)}
          className="fixed top-0 left-0 flex justify-center items-center h-screen w-full whitespace-nowrap bg-black/80 z-50 lg:hidden"
        >
          <div className="text-primary fit-text dark:dark gradient-text font-bold">
            {projectName}
          </div>
        </div>
      )}
      <div className="relative flex flex-col justify-center whitespace-nowrap">
        <div
          onClick={() => setTitleModal(true)}
          className="text-[36px] md:text-[60px] pt-5 text-textPrimary dark:dark gradient-text px-5 truncate cursor-pointer lg:cursor-none lg:pointer-events-none"
        >
          {projectName}
        </div>
        <div className="relative -top-2 text-yellow-100 pl-10">
          production year：{getProject?.productionYear}
        </div>
      </div>
      <div className="relative -top-2 text-textPrimary text-3xl py-2 px-5">
        {"(" + getProject?.description + ")"}
      </div>
      {/* 使用方法container */}
      <div className="flex flex-row px-5 gap-3">
        <div className="hidden lg:flex justify-center items-center w-[100%] sm:basis-[60%] flex-shrink-0">
          <Embla
            photos={slides}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div className="text-textPrimary flex flex-col text-2xl sm:text-3xl sm:flex-grow overflow-hidden h-full">
          <div className="break-words">
            {getProject?.instruction[selectedIndex]}
          </div>
        </div>
      </div>
      <br />
      {/* mobile view */}
      <div className="flex lg:hidden justify-center items-center w-[100%] sm:w-[80%] mx-auto">
        <Embla
          photos={slides}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <TechStack tech={getProject?.techStack} />
      <br />
      <div className="flex justify-center items-center text-xl text-textPrimary font-bold mx-auto ">
        <a
          href={getProject?.link}
          target="_blank"
          className="hover:text-red-500"
        >
          <HiOutlineExternalLink className="text-4xl w-full mx-auto" />
          <div className="">網址</div>
        </a>
      </div>
      <br />
    </>
  );
};

export default Project;
