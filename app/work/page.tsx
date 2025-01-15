"use client";
import React, { useState } from "react";
import { workLists } from "@/data";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

function Work() {
  const [select, setSelect] = useState<number>(0);
  const lists = workLists;

  return (
    <div className="mx-auto h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        <div className="flex flex-row  max-w-7xl w-full overflow-hidden h-[400px]">
          {/* left box */}
          <div className="flex-1 w-0 hidden pl-0 sm:block sm:pl-3">
            {workLists.map(
              (data, idx) =>
                idx === select && (
                  <div
                    key={idx}
                    className="relative h-full w-full bg-no-repeat overflow-hidden rounded-xl"
                  >
                    <Image
                      className="absolute top-0 w-full rounded-xl"
                      src={data.photo}
                      alt="picture of the project"
                      objectFit="cover"
                      layout="fill"
                      priority={true}
                    />
                  </div>
                )
            )}
          </div>
          {/* right box */}
          <div className="flex flex-1 flex-col flex-nowrap p-5 overflow-y-auto ">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ type: "linear", duration: 2 }}
              className="flex justify-between items-center px-3 py-3 text-4xl border-b-[1px] border-gray-600"
            >
              <div className="text-textPrimary dark:dark gradient-text">
                WORK
              </div>
              <div className="text-textPrimary dark:text-blue-600">
                {lists.length}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ type: "linear", duration: 2 }}
              className="flex flex-col"
            >
              {workLists.map((data, idx) => (
                <Link href={`/work/${data.name}`} key={idx} className="group">
                  <div
                    onMouseEnter={() => setSelect(idx)}
                    className="flex flex-row items-center overflow-hidden relative border-b-[1px] border-gray-600 group py-3 hover:pb-10"
                  >
                    <div className="absolute left-16 top-4 text-yellow-100 transition-all opacity-0 group-hover:top-11 group-hover:delay-300 group-hover:duration-300 group-hover:opacity-100">
                      production year：{data.productionYear}
                    </div>
                    <div className="flex flex-row items-center relative -left-6 text-xl w-full text-textPrimary bg-transparent cursor-pointer truncate group-hover:pl-6 duration-300 group-hover:text-white dark:group-hover:text-red-300 ">
                      <AiOutlineArrowRight className="text-2xl" />
                      {data.name}
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
