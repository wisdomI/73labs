import React from "react";
import Image from "next/image";

const Card = ({ title, description, image, reverse }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-8 items-center`}
      >
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-gray-200 text-base md:text-lg whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
