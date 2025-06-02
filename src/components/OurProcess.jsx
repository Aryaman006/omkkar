import React from 'react';

const steps = [
  { number: '01', title: 'Requirement', subtitle: 'Finalization' },
  { number: '02', title: 'Planning' },
  { number: '03', title: 'Design' },
  { number: '04', title: 'Development' },
  { number: '05', title: 'Testing & Release' }, // fixed duplicate '04'
];

const OurProcess = () => {
  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f0f3f] mb-12">
        Our Process
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`group py-12 px-4 ${
              index % 2 === 0 ? 'bg-[#f9fafe]' : 'bg-[#f5f6fa]'
            } relative z-10`}
          >
            {/* Horizontal line */}
            <div className="absolute top-[60px] left-0 w-full h-px bg-[#e6ecfb] z-0 group-hover:bg-[#2e2f75] transition-colors duration-300" />

            {/* Step number circle */}
            <div className="relative flex ml-10">
              <div className="w-12 h-12 rounded-full bg-[#e6ecfb] flex items-center justify-center text-[#2e2f75] font-semibold z-10 transition-all duration-300 group-hover:bg-[#2e2f75] group-hover:text-white">
                {step.number}
              </div>
            </div>

            {/* Step text */}
            <div className="mt-6 ml-10 text-[#0f0f3f] font-semibold text-lg leading-snug">
              <p>{step.title}</p>
              {step.subtitle && <p>{step.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
