import Image from "next/image";

const benefits = [
  {
    title: "Quicker hiring processes",
    image: "/meeting.jpg",
  },
  {
    title: "Timely talent recognition",
    image: "/meeting2.png",
  },
  {
    title: "Swift, hassle-free onboarding",
    image: "/meeting3.png",
  },
];

const steps = [
  { number: '01', title: 'Information technology' },
  { number: '02', title: 'Banking, financial service and insurance' },
  { number: '03', title: 'Business Process Service' },
  { number: '04', title: 'Healthcare' },
  { number: '05', title: 'FMCG' }, // fixed duplicate '04'
];

const StaffingSection = () => {
  return (
    <section className="bg-[#0e0d3d] text-white">
      {/* Header Section */}
       <div className="bg-[#14153e] text-white py-40 flex justify-around text-center">
        <div>
          <h2 className="text-5xl font-semibold">Staffing</h2>
          <p className="mt-8">Omkkar Innovations / Staffing</p>
        </div>
      </div>
      {/* <div className="py-16 text-center">
        <h1 className="text-4xl font-bold">Staffing</h1>
        <p className="mt-2 text-gray-300">Omkkar Innovations / <span className="text-white">Staffing</span></p>
      </div> */}

      {/* Body Section */}
      <div className="bg-[#f6fafd] text-[#0e0d3d] py-20 px-4 sm:px-10 md:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-4">For Employers</h2>
          <p className="text-gray-700">
            With our swift recruitment processes and extensive network, prospective employees can expect their hiring,
            onboarding, and integration into the company culture to be expedited smoothly.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-center mb-8">Benefits</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <div className="relative w-full h-52 mb-4 rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="font-semibold text-[#0e0d3d]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
       <section className="bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f0f3f] mb-12">
        Industries we work with
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
    </section>
  );
};

export default StaffingSection;
