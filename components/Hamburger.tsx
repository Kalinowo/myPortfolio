import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HamburgerProps {
  handleClick: () => void;
}

function Hamburger({ handleClick }: HamburgerProps) {
  return (
    <div className="fixed left-0 h-full w-full mx-auto p-20 font-bold text-4xl bg-primary">
      <div className="flex flex-col gap-8 dark:text-white">
        <motion.div
          className=""
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
          }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          <Link
            className="hover:pl-10 duration-500"
            onClick={handleClick}
            href="/"
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: -150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
          }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <Link
            className="hover:pl-10 duration-500"
            onClick={handleClick}
            href="/work"
          >
            Work
          </Link>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
          }}
          transition={{ ease: "easeOut", duration: 0 }}
        >
          <Link
            className="hover:pl-10 duration-500"
            onClick={handleClick}
            href="/about"
          >
            About
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hamburger;
