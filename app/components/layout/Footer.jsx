import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/10 rounded-t-2xl text-white pt-12 mt-20 px-6 lg:px-20 mx-10 lg:mx-30 sm:mx-10 max-w-[1600px] pb-8 text-sm ">
      <div className="max-w-7xl mx-auto flex flex-col gap-30">
        <div>
          <div className="flex flex-col items-start w-full sm:w-auto lg:hidden">
            <img src="/logo.png" alt="Lab73 Logo" className="w-10 h-10" />
            <span className="font-semibold text-sm">Lab73</span>
          </div>
        </div>

        {/* Column 1: Heading and Schedule form */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-4 max-w-md">
            Join The AI Revolution <br /> Today
          </h2>

          <div className="max-w-lg">
            <p className="text-white/90 text-sm mb-4">
              Unlock the potential of AI tailored for your business. Our
              solutions are designed to drive growth and innovation.
            </p>
            <div>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-3 text-black placeholder:text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A5491E] focus:border-transparent"
                />
                <button className="bg-[#A5491E] text-white font-semibold px-6 py-3 mt-2 sm:mt-0 sm:ml-2 rounded">
                  Schedule
                </button>
              </form>
              <p className="text-white/60 text-xs mt-2">
                By clicking Get Started, you confirm your agreement with our
                Terms and Conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-12">
          {/* Column 2: Logo */}
          <div className="hidden sm:flex flex-col items-start w-full sm:w-auto">
            <img src="/logo.png" alt="Lab73 Logo" className="w-10 h-10 mb-2" />
            <span className="font-semibold text-sm">Lab73</span>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="font-semibold text-white mb-3">Stay Connected</h4>
            <ul className="space-y-2 text-white/90">
              <li>Facebook</li>
              <li>Twitter - X</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>

          {/* Column 5: Subscribe Now */}
          <div>
            <h4 className="font-semibold text-white mb-3">Subscribe Now</h4>
            <ul className="space-y-2 text-white/90">
              <li>Newsletter</li>
              <li>Updates</li>
              <li>Promotions</li>
              <li>Offers</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Column 6: Join Newsletter */}
          <div className="w-full sm:w-auto">
            <h4 className="font-semibold text-white mb-2">Join</h4>
            <p className="text-white/70 text-xs mb-2 max-w-xs">
              Stay informed on our latest features and updates by joining our
              newsletter.
            </p>
            <form className="flex flex-col sm:flex-row max-w-xs">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 text-black placeholder:text-gray-700 rounded flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A5491E] focus:border-transparent"
              />
              <button className="bg-[#2D2D2D] text-white px-4 py-2 mt-2 sm:mt-0 sm:ml-2 rounded">
                Join
              </button>
            </form>
            <p className="text-white/60 text-xs mt-1">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between text-xs text-white/70 gap-4">
        <p>© 2024 Lab73. All rights reserved</p>

        <div className="flex flex-wrap items-center gap-4 justify-center">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>

        <div className="flex items-center gap-4 text-[#f25d2b]">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}
