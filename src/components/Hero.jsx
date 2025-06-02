import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f8f9fd] py-12 px-4 md:px-20">
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
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
    “Empowering Your Digital Transformation with Cutting-Edge Software Solutions”
  </p>
  <button className="bg-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition">
    Start A Project →
  </button>
</div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 relative h-[350px] sm:h-[400px] md:h-[500px] px-4 md:px-0">
          <Image src="/hero1.png" alt="BG Shape" fill className="object-contain" priority />

          {/* Container for Man and Woman images */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 sm:px-10">
            <Image
              src="/Man.png"
              alt="Man"
              width={100}
              height={100}
              className="-mb-4 sm:w-[120px] sm:-mb-8"
            />
            <Image
              src="/Women.png"  
              alt="Woman"
              width={160}
              height={100}
              className="-mb-4 mr-40 mt-20 sm:w-[200px] sm:-mb-8"
            />
          </div>

          <Image
            src="/target.png"
            alt="Target"
            width={80}
            height={80}
            className="absolute mt-20 right-6 top-6 sm:right-12 sm:top-10"
          />
        </div>
      </div>

      {/* Client Logos */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-10 grayscale opacity-80 px-4">
        {[
          { src: '/MaMake-My-Trip-Smartters-1.png', alt: 'MakeMyTrip' },
          { src: '/Money-Control-Smartters-1.png', alt: 'MoneyControl' },
          { src: '/Ruchi-Smartters.png', alt: 'Ruchi Foodline' },
          { src: '/Entri-Smartters.png', alt: 'Entri' },
          { src: '/Ausicare-Smartters.png', alt: 'Ausicare' },
          { src: '/Indivdo-Smartters.png', alt: 'Indivdo' },
          { src: '/jupionclasses-Smartters.png', alt: 'Jupion Classes' },
          { src: '/Doorvey-Smartters.png', alt: 'Doorvey' },
          { src: '/Conficore-Smartters.png', alt: 'Conficore' },
        ].map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
