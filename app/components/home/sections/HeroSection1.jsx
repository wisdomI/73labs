"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection1 = () => {
  return (
    <div className="relative lg:min-h-screen text-white overflow-x-hidden">
      {/* Container */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        {/* Content Wrapper */}
        <motion.div 
          className="pt-28 pb-16 lg:pt-32 relative z-10 flex flex-col lg:w-[60%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-[64px] font-light leading-tight mb-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the AI solution your business needs –{" "}
            <span className="italic">instantly</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-gray-400 text-sm sm:text-base lg:text-lg mb-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tailored AI solutions to meet your exact business needs...
          </motion.p>

          {/* Glass Box */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md w-full md:w-[80%] lg:w-[60%] rounded-2xl p-6 sm:p-10 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Unleash the Power of AI in Your Business
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              We build custom AI solutions that solve real problems and scale with you. <br />
              Join the ranks of forward-thinking companies transforming with tech.
              Backed by CEOs. Trusted by top brands.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side Image - Hidden on mobile */}
        <motion.div 
          className="hidden lg:block absolute -right-60 bottom-0 w-[60%] h-[95vh]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-[90vh]">
            <Image
              src="/hero-img.png"
              alt="AI Robot"
              fill
              className="object-contain object-bottom scale-110 translate-x-[5%]"
              priority
            />

            {/* Feature Pills */}
            <motion.div 
              className="absolute top-[38%] right-[55%] bg-white/10 backdrop-blur-sm px-8 py-2.5 mx-2 rounded-2xl text-white text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Personalized Solutions
            </motion.div>
            <motion.div 
              className="absolute top-[50%] right-[27%] bg-white/10 backdrop-blur-sm px-8 py-2.5 mx-2 rounded-2xl text-white text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Instant Recommendations
            </motion.div>
            <motion.div 
              className="absolute top-[60%] right-[63%] bg-white/10 backdrop-blur-sm px-8 py-2.5 mx-2 rounded-2xl text-white text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Efficiency in delivery
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection1;




// import React from "react";
// import Image from "next/image";

// const HeroSection1 = () => {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden">
//       <div className="container mx-20">
//         {/* Left Content */}
//         <div className="pt-32 lg:w-[65%] relative z-10 mt-30">
//           <h1 className="text-white text-4xl md:text-4xl lg:text-[64px] font-light leading-tight mb-6">
//             Discover the AI solution your business needs -
//             <span className="italic">instantly</span>
//           </h1>
//           <p className="text-gray-400 text-base md:text-lg mb-12">
//             Tailored AI solutions to meet your exact business needs...
//           </p>

//           <div className="bg-white/10 text-white w-[60%] rounded-2xl p-2 md:p-20 mt-20">
//             <h1>Unleash the Power of AI in Your Business </h1>
//             <p className="font-extralight text-gray-400">
//               We build custom AI solutions that solve real problems and scale
//               with you.Join the ranks of forward-thinking companies transforming
//               with tech.Backed by CEOs. Trusted by top brands.
//             </p>
//           </div>

//           {/* URL Input and Button */}
//           {/* <div className="flex flex-col gap-4 max-w-xl">
//             <input
//               type="text"
//               placeholder="input company's url"
//               className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
//             />
//             <button className="lg:w-[40%] sm:w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-medium flex items-center justify-center whitespace-nowrap text-lg">
//               Get Solution
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div> */}

//           {/* Mobile Feature Pills */}
//           {/* <div className="mt-12 flex flex-col gap-4 lg:hidden">
//             <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-white inline-block">
//               Personalized Solutions
//             </div>
//             <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-white inline-block">
//               Instant Recommendations
//             </div>
//             <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-white inline-block">
//               Efficiency in delivery
//             </div>
//           </div> */}
//         </div>

//         {/* Right Content - Robot Image and Desktop Feature Pills */}
//         <div className="hidden lg:block absolute -right-60 bottom-0 w-[60%] h-[95vh]">
//           <div className="relative w-full h-[90vh]">
//             <Image
//               src="/hero-img.png"
//               alt="AI Robot"
//               fill
//               className="object-contain object-bottom scale-110 translate-x-[5%]"
//               priority
//             />

//             {/* Desktop Feature Pills */}
//             <div className="absolute top-[38%] right-[55%] bg-white/10 backdrop-blur-sm px-8 py-2.5 rounded-2xl text-white text-base">
//               Personalized Solutions
//             </div>
//             <div className="absolute top-[50%] right-[27%] bg-white/10 backdrop-blur-sm px-8 py-2.5 rounded-2xl text-white text-base">
//               Instant Recommendations
//             </div>
//             <div className="absolute top-[60%] right-[63%] bg-white/10 backdrop-blur-sm px-8 py-2.5 rounded-2xl text-white text-base">
//               Efficiency in delivery
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection1;

