import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Custom radial gradients using absolute positioning */}
      <div 
        className="fixed -top-20 -left-[40vw] w-[80vw] h-[80vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(158, 72, 27, 0.3) 0%, rgba(61, 26, 15, 0.05) 50%, transparent 100%)',
        }}
      > </div>
      <div 
        className="fixed -top-140 left-[40vw] w-[80vw] h-[80vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(158, 72, 27, 0.3) 20%, rgba(61, 26, 15, 0.05) 50%, transparent 100%)',
        }}
      ></div>
      
      {/* Bottom-right gradient */}
      <div 
        className="fixed -bottom-50 -right-[40vw] w-[80vw] h-[80vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(158, 72, 27, 0.3) 0%, rgba(61, 26, 15, 0.05) 50%, transparent 100%)',
        }}
      ></div>
      
      {/* Vignette effect */}
      {/* <div 
        className="fixed inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, transparent 60%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      ></div> */}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
