"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HerosSection2 = () => {
  return (
    <motion.div 
      className="bg-white/10 text-white w-[90vw] rounded-2xl p-10 md:p-20 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/sub2img.png"
            alt="hero subsection2 image"
            className="rounded-lg w-full lg:w-[500px] h-auto"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div 
          className="flex flex-col max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white text-3xl md:text-4xl lg:text-[48px] font-light leading-tight mb-6">
            Unlock the Power of Custom AI Solutions for Your{" "}
            <span className="italic font-semibold">Business Growth</span>
          </h3>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Our tailored AI solutions are designed to streamline your operations and enhance decision-making. Experience increased efficiency and innovation that drives your business forward.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HerosSection2;
