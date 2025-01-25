import React from "react";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

interface techProps {
  tech?: string[];
}

type IconMapKey = "react" | "mongodb" | "nextjs" | "tailwindcss";

const iconMap: Record<IconMapKey, React.ReactNode> = {
  react: <SiReact />,
  mongodb: <SiMongodb />,
  nextjs: <RiNextjsLine />,
  tailwindcss: <SiTailwindcss />,
};

function TechStack({ tech }: techProps) {
  return (
    <div className="text-textPrimary flex flex-row justify-center items-center text-2xl gap-3 sm:text-4xl">
      TechStacks:
      {tech?.map((data, idx) => (
        <div key={idx} className="">
          {iconMap[data.toLowerCase() as IconMapKey] || ""}
        </div>
      ))}
    </div>
  );
}

export default TechStack;
