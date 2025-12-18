"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="pt-40 pb-20 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl border border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/hero-img.png"
                alt="Contact illustration"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Form Section */}
            <div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-base"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-base"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none text-base"
                    placeholder="Your message"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors text-base shadow-lg shadow-orange-600/20"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <p className="text-gray-300 text-base">contact@73labs.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
            <p className="text-gray-300 text-base">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">Location</h3>
            <p className="text-gray-300 text-base">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
