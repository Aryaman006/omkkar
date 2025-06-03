'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f8f9fd] py-12 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:text-left px-4 md:px-0">
          <p className="text-xs sm:text-sm tracking-widest text-indigo-600 uppercase font-semibold mb-2">
            Omkkar Inovations
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-4 leading-tight">
            Innovating the Future <br className="hidden md:block" />
            with Intelligent Software Solutions
          </h1>
          <p className="text-sm font-semibold sm:text-base md:text-lg text-gray-600 mb-6">
            “Empowering Your Digital Transformation with Cutting-Edge Software Solutions”
          </p>
          <button className="bg-[#2c114e] text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition" onClick={() => window.location.href = "/contact-us"}>
            Start A Project →
          </button>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 relative h-[350px] sm:h-[400px] md:h-[500px] px-4 md:px-0"
        >
          {/* Animated Big Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute inset-0"
          >
            <Image src="/hero1.png" alt="BG Shape" fill className="object-contain" priority />
          </motion.div>

          {/* Foreground People */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 sm:px-10">
            <Image
              src="/Man.png"
              alt="Man"
              width={100}
              height={100}
              className="animate-float -mb-4 sm:w-[120px] sm:-mb-8"
            />
            <Image
              src="/Women.png"
              alt="Woman"
              width={160}
              height={100}
              className="animate-float -mb-4 mr-40 mt-20 sm:w-[200px] sm:-mb-8"
            />
          </div>

          {/* Target Icon */}
          <Image
            src="/target.png"
            alt="Target"
            width={80}
            height={80}
            className="absolute mt-20 right-6 top-6 sm:right-12 sm:top-10 animate-float"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
