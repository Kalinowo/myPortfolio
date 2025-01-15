"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "@/lib/EmblaCarouselThumbsButton";
import { workLists } from "@/data";
import Image from "next/legacy/image";
import TechStack from "./ui/TechStack";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectProps {
  projectName: string;
  options?: EmblaOptionsType;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { projectName, options } = props;
  const [titleModal, setTitleModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const getProject = workLists.find((data) => data.name === projectName);

  const slides = workLists.find(
    (data) => data.name === projectName
  )?.extraPhoto;

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

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
      <div className="text-textPrimary flex flex-col pl-10 gap-5 text-2xl sm:text-3xl">
        <div className="relative -left-5 -bottom-2">使用方式：</div>
        {getProject?.instruction?.map((data, idx) => (
          <div key={idx} className="pl-5">
            {idx + 1}.{data}
          </div>
        ))}
      </div>
      <br />
      <TechStack tech={getProject?.techStack} />
      <br />
      <div className="flex justify-center items-center text-xl text-textPrimary font-bold mx-auto ">
        <a
          href={getProject?.link}
          target="_blank"
          className="hover:text-red-500"
        >
          <HiOutlineExternalLink className="text-4xl  w-full mx-auto" />
          <div className="">網址</div>
        </a>
      </div>
      <br />
      <div className="flex justify-center items-center w-[100%] sm:w-[80%] mx-auto">
        <div className="embla pb-5 pt-2 px-1 sm:px-0">
          <div className="embla__viewport" ref={emblaMainRef}>
            <div className="embla__container">
              {slides?.map((data, idx) => (
                <div className="embla__slide" key={idx}>
                  <div className="embla__slide__number relative overflow-hidden rounded-xl">
                    <Image
                      className="absolute top-0 w-full rounded-xl"
                      src={data}
                      alt="picture of the project"
                      objectFit="fill"
                      layout="fill"
                      priority={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla-thumbs">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {slides?.map((data, idx) => (
                  <Thumb
                    key={idx}
                    onClick={() => onThumbClick(idx)}
                    selected={idx === selectedIndex}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
