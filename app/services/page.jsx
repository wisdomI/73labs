"use client";
import React, { useRef } from "react";
import { useScroll, motion, useMotionValueEvent, useTransform } from "framer-motion";
// import Image from "next/image";
import Card from "../components/card";

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Solutions",
      description: `Seamless automation. AI Chatbots & Virtual Assistants: Automate
        customer interactions in multiple languages. Personalized,
        responsive, always on. AI-powered CRM & Sales Optimization:
        Predict customer behavior, automate follow-ups, and close more
        deals. AI-driven Marketing Automation: Hyper-personalized email
        and ad campaigns powered by machine learning. AI-based Customer
        Insights & Analytics: Understand your customers like never
        before. Make data-driven decisions in real time.`,
      image: "/hero-image.png",
    },
    {
      id: 2,
      title: "Smart Virtual Assistants",
      description: `Transform customer service with 24/7 AI-powered assistants.
        Instantly respond to queries, book appointments, and streamline
        support.`,
      image: "/hero-image.png",
    },
    {
      id: 3,
      title: "Sales Forecasting Tools",
      description: `Use AI to predict customer buying patterns and optimize sales
        funnels. Make informed decisions backed by data trends.`,
      image: "/hero-image.png",
    },
    {
      id: 4,
      title: "Sales Forecasting Tools",
      description: `Use AI to predict customer buying patterns and optimize sales
        funnels. Make informed decisions backed by data trends.`,
      image: "/hero-image.png",
    },
    {
      id: 5,
      title: "Sales Forecasting Tools",
      description: `Use AI to predict customer buying patterns and optimize sales
        funnels. Make informed decisions backed by data trends.`,
      image: "/hero-image.png",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-[400vh] pt-200px">
      {/* Header */}
      <motion.div 
        className="sticky top-40 left-0 right-0 flex items-center justify-center h-32"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.1], [0, -50])
        }}
      >
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
      </motion.div>

      {/* Services stack */}
      <div className="relative">
        {services.map((service, index) => {
          // Adjusted timing for better stacking
          const start = index * 0.25;
          const end = (index + 1) * 0.25;
          const stackStart = start + 0.1;
          const stackEnd = end - 0.1;
          
          return (
            <motion.div
              key={service.id}
              className="sticky top-0 h-screen flex items-center justify-center"
              style={{
                y: useTransform(
                  scrollYProgress,
                  [start, stackStart, stackEnd, end],
                  [0, -50, -50, -100]
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [start, stackStart, stackEnd, end],
                  [1, 1, 1, 0]
                ),
                scale: useTransform(
                  scrollYProgress,
                  [start, stackStart, stackEnd, end],
                  [1, 0.95, 0.95, 0.9]
                ),
                zIndex: services.length - index
              }}
            >
              <Card
                title={service.title}
                description={service.description}
                image={service.image}
                reverse={index % 2 !== 0}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPage;





