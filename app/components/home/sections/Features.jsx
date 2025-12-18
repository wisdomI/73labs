import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="col-span-1 lg:col-span-2 mt-12 sm:mt-16 overflow-hidden mx-5">
      <div className="flex flex-col items-center mb-8">
        <h4 className="text-xl sm:text-3xl font-bold text-center mb-4">
          Trusted By Top Organizations
        </h4>
      </div>
      <div className="relative w-full p-8 overflow-hidden">
        <div className="flex logo-scroll">
          {/* First set of logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={`first-${i}`} className="flex-shrink-0 mx-6 sm:mx-8">
              <Image
                src={`/brand-logo-${i}.svg`}
                alt={`Featured Logo ${i}`}
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 h-auto"
              />
            </div>
          ))}
          {/* Duplicate set of logos for seamless loop */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={`second-${i}`} className="flex-shrink-0 mx-6 sm:mx-8">
              <Image
                src={`/brand-logo-${i}.svg`}
                alt={`Featured Logo ${i}`}
                width={120}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity w-24 sm:w-32 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
