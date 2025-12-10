"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems = [], className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) setVisible(false);
      else setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center justify-between max-w-fit fixed top-10 inset-x-0 mx-auto border border-gray-200 rounded-full bg-white shadow-lg z-[5000] px-6 py-2 space-x-6",
          className
        )}
      >
        {/*left logo/txt*/}
        <div className="font-semibold text-lg text-gray-800 select-none pr-6">
          <span className="text-[#6636c6]">G</span>
          <span className="text-[#e45c5c]">D</span>
          <span className="text-[#6636c6]">G</span>
          <span className="text-[#e3e76d]">O</span>
          <span className="text-[#38c636]">C</span>{" "}
          <span className="text-[#e45c5c]">F</span>
          <span className="text-[#6636c6]">I</span>
          <span className="text-[#e3e76d]">E</span>
          <span className="text-[#38c636]">M</span>
        </div>

        {/* 🌐 Center nav links */}
        <div className="flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-gray-700 hover:text-blue-600 items-center flex space-x-1"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Right side button */}
        <button className="border text-sm font-medium relative border-gray-300 text-gray-800 px-4 py-2 rounded-full hover:border-blue-500 hover:text-blue-600 transition">
          <span>Join Us</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
