"use client";
import React from 'react';
import HeroSection1 from './sections/HeroSection1';
import HerosSection2 from './sections/HerosSection2';
import Testimonial from './sections/Testimonial';
import Features from './sections/Features';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <HeroSection1 />
      <motion.div 
        className='flex justify-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <HerosSection2 />
      </motion.div>
      <motion.div 
        className='flex justify-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonial />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Features />
      </motion.div>
    </div>
  ) 
};

export default Hero; 