"use client";
import React, { useState, useEffect } from "react";
import { PiPlanet } from "react-icons/pi";
import Link from "next/link";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import Hamburger from "./Hamburger";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Header() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hint, setHint] = useState<boolean>(true);
  const pathname = usePathname();

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setHint(false);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const hamburgerState: () => void = () => setHamburger(!hamburger);
  return (
    <div
      className={
        (pathname === "/" || pathname === "/about") && !hamburger
          ? "absolute top-0 mx-auto w-full py-10 z-50 px-5"
          : "absolute top-0 mx-auto w-full py-10 z-50 px-5 bg-primary"
      }
    >
      <div className="flex items-center w-full text-4xl p-5 justify-between">
        <Link
          onClick={() => setHamburger(false)}
          href="/"
          className="text-white"
        >
          {theme === "light" ? (
            <PiPlanet className="text-5xl" />
          ) : (
            <svg width="50px" height="50px">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(255,94,247)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(94,176,247)", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <PiPlanet fill="url(#grad1)" className="text-5xl" />
            </svg>
          )}
        </Link>
        {(hamburger && (
          <div className="flex gap-2">
            {theme === "light" ? (
              <div className="relative flex justify-center items-center">
                <CiLight
                  onClick={toggleTheme}
                  className="text-white cursor-pointer"
                />
                {hint && (
                  <motion.div
                    onClick={toggleTheme}
                    className="absolute bg-red-500 rounded-full cursor-pointer"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      repeat: Infinity,
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </div>
            ) : (
              <svg
                width="36px"
                height="36px"
                onClick={toggleTheme}
                className="cursor-pointer"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(255,94,247)", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(94,176,247)", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <CiDark fill="url(#grad1)" />
              </svg>
            )}
            <CiSettings
              onClick={hamburgerState}
              className="cursor-pointer rotate-90 duration-500 text-white"
            />
          </div>
        )) || (
          <div className="flex gap-2">
            {theme === "light" ? (
              <div className="relative flex justify-center items-center">
                <CiLight
                  onClick={toggleTheme}
                  className="text-white cursor-pointer"
                />
                {hint && (
                  <motion.div
                    onClick={toggleTheme}
                    className="absolute bg-red-500 rounded-full cursor-pointer"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      repeat: Infinity,
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </div>
            ) : (
              <svg
                width="36px"
                height="36px"
                onClick={toggleTheme}
                className="cursor-pointer"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(255,94,247)", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(94,176,247)", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <CiDark fill="url(#grad1)" />
              </svg>
            )}
            <CiSettings
              onClick={hamburgerState}
              className="cursor-pointer duration-500 text-white"
            />
          </div>
        )}
      </div>
      {hamburger && <Hamburger handleClick={hamburgerState} />}
    </div>
  );
}

export default Header;
