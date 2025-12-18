"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative px-4 sm:px-6">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        {/* Decorative Element */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 w-16 h-16 bg-blue-400 rounded-lg opacity-20 blur-lg"></div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold relative">
            Explore
            <span className="ml-2 text-[#844F93]">Health</span> <br />
            Horizons
          </h1>
        </div>

        {/* Main Text */}
        <p className="text-xl sm:text-2xl text-gray-600 max-w-xl">
          We blend insights to create digital products for forward-thinking
          university clinics.
        </p>

        {/* Compatibility Section */}
        <div className="space-y-4">
          <p className="text-gray-500">Compatible with:</p>
          <div className="flex gap-6">
            <Image src="/windows.svg" alt="Windows" width={32} height={32} />
            <Image src="/apple.svg" alt="Apple" width={32} height={32} />
            <Image src="/linux.svg" alt="Linux" width={32} height={32} />
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="block lg:hidden">
          <button className="bg-[#844F93] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-purple-900 transition-colors shadow-lg w-full">
            Request a demo
          </button>
        </div>
      </div>

      {/* Right Column - Background Image with CTA Button */}
      <div className="relative min-h-[400px] sm:min-h-[600px] hidden lg:block">
        {/* Decorative Circle */}
        <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-lg"></div>

        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: 'url("/stethoscope-globe.png")',
          }}
        >
          {/* Desktop CTA Button */}
          <div className="absolute left-[-20%] bottom-1/5 w-full flex justify-center">
            <button className="bg-[#844F93] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors shadow-lg">
              Request a demo
            </button>
          </div>
        </div>
      </div>

      {/* Featured Logos Section */}
      <div className="col-span-1 lg:col-span-2 mt-12 sm:mt-16 overflow-hidden">
        <p className="text-gray-500 mb-6 sm:mb-8">We are Featured in</p>
        <div className="relative w-full">
          <div className="flex logo-scroll">
            {/* First set of logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={`first-${i}`} className="flex-shrink-0 mx-6 sm:mx-8">
                <Image
                  src={`/brand-logo-${i}.svg`}
                  alt={`Featured Logo ${i}`}
                  width={120}
                  height={40}
                  className="opacity-50 hover:opacity-100 transition-opacity w-24 sm:w-32 h-auto"
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
    </main>
  );
};

export default HeroSection;
