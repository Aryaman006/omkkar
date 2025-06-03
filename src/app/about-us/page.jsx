'use client'; // needed for React hooks and Intersection Observer

import AboutSection from '@/components/AboutUsSection';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// AnimatedCounter component to animate numbers on scroll
function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <h2 ref={ref} className="text-5xl md:text-6xl font-semibold font-sans">
      {count}
    </h2>
  );
}

export default function OmkkarOverview() {
  return (
    <div className="w-full mt-20">
      {/* Stats Section */}
      <div className="bg-[#14153e] text-white py-40 flex justify-center text-center">
        <div>
          <h2 className="text-5xl font-semibold">About Us</h2>
          <p className="mt-8">Omkkar Innovations / About Us</p>
        </div>
      </div>

      <AboutSection />

      {/* Animated Stats Section */}
      <div className="bg-gray-500 text-white px-6 sm:px-12 md:px-20 py-20 md:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center max-w-7xl mx-auto">
          {[
            { value: 100, label: 'Businesses built by us' },
            { value: 50, label: 'Team Members' },
            { value: 100, label: 'Satisfied Clients' },
          ].map((item, i) => (
            <div key={i}>
              <AnimatedCounter target={item.value} />
              <p className="mt-2 text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row m-10 md:m-40 items-center justify-center gap-12 px-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/team.jpg" // Replace with actual image
            alt="Why Choose Illustration"
            width={600}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c2c2c]">
            Why Choose Omkkar Innovation
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Detailed evaluation of Client and Job Description</li>
            <li>Social recruiting</li>
            <li>A dedicated team of recruiters</li>
          </ul>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Industries we service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src="/it.jpg" // Replace with actual image
              alt="IT / ITeS"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="text-center py-4 font-semibold">IT / ITeS</p>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src="/banking.jpg" // Replace with actual image
              alt="Banking and Finance"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="text-center py-4 font-semibold">Banking and Finance</p>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src="/engineering.jpg" // Replace with actual image
              alt="Engineering and Manufacturing"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="text-center py-4 font-semibold">Engineering and Manufacturing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
