import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative bg-[#f8faff] py-16 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Left: Illustration with Rocket */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Main Illustration */}
          <Image
            src="/about-vector.png"
            alt="Team working illustration"
            width={600}
            height={400}
            className="object-contain"
          />

          {/* Rocket Image */}
          <Image
            src="/about-vector-2.png"
            alt="Rocket"
            width={120}
            height={120}
            className="absolute -top-10 right-10 animate-float"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-[#333]">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our passion for building products is what drives us to make stunning
            shippable software for different domains. We have expertise in building fully
            functional web apps, mobile apps, and desktop apps. Starting from e-commerce,
            e-learning, fitness, entertainment to highly customized applications,
            we have our hand in all these domains.
          </p>

          <h2 className="text-3xl font-bold mb-4">Our Goal</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to help you achieve your business goals with our development
            which can be reflected in our developed app. We believe in developing the app
            while keeping the users and business goals in mind so that it will take
            you less effort to carry your further operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
