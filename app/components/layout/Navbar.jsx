'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src="/logo.svg" alt="logo image" height={50} width={50} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center border border-orange-500/20 rounded-full px-[20%] py-3 bg-black/20 backdrop-blur-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'transition-colors px-4',
                  pathname === href
                    ? 'text-orange-600'
                    : 'text-white hover:text-orange-400'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            <div className="flex flex-col py-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'px-4 py-3 transition-colors',
                    pathname === href
                      ? 'text-orange-600 bg-white/5'
                      : 'text-white hover:bg-white/5'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// Compare this snippet from app/components/home/sections/HeroSection1.jsx:


// // 'use client'

// // import React, { useState } from 'react';
// // import Link from 'next/link';

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <nav className="absolute top-0 left-0 right-0 z-50 py-6 border-b border-orange-500/10">
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between items-center">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center">
// //             <span className="text-white text-2xl font-bold">Lab73</span>
// //             <div className="w-2 h-2 bg-orange-500 rounded-full ml-1"></div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-8 border-orange rounded-full px-4">
// //             <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors">
// //               Home
// //             </Link>
// //             <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
// //               About
// //             </Link>
// //             <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
// //               Services
// //             </Link>
// //             <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
// //               Contact
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button 
// //             className="lg:hidden text-white p-2"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {!isMenuOpen ? (
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //               </svg>
// //             ) : (
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="lg:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
// //             <div className="flex flex-col py-2">
// //               <Link 
// //                 href="/" 
// //                 className="text-orange-500 hover:bg-white/5 px-4 py-3 transition-colors"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 Home
// //               </Link>
// //               <Link 
// //                 href="/about" 
// //                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 About
// //               </Link>
// //               <Link 
// //                 href="/services" 
// //                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 Services
// //               </Link>
// //               <Link 
// //                 href="/contact" 
// //                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 Contact
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar; 

// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 right-0 z-50 py-6">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <img src="/logo.svg" alt="logo image" height={50} width={50}/>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center border border-orange-500/20 rounded-full px-[20%] py-3 bg-black/20 backdrop-blur-sm">
//             <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors px-4">
//               Home
//             </Link>
//             <Link href="/about" className="text-white hover:text-orange-400 transition-colors px-4">
//               About
//             </Link>
//             <Link href="/services" className="text-white hover:text-orange-400 transition-colors px-4">
//               Services
//             </Link>
//             <Link href="/products" className="text-white hover:text-orange-400 transition-colors px-4">
//               Products
//             </Link>
//             <Link href="/contact" className="text-white hover:text-orange-400 transition-colors px-4">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-white p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {!isMenuOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
//             <div className="flex flex-col py-2">
//               <Link 
//                 href="/" 
//                 className="text-orange-500 hover:bg-white/5 px-4 py-3 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link 
//                 href="/about" 
//                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link 
//                 href="/services" 
//                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Services
//               </Link>
//               <Link 
//                 href="/services" 
//                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Products
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="text-white hover:bg-white/5 px-4 py-3 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;