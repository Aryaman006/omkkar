import Image from "next/image";

const technologies = [
  {
    title: "Database Technologies",
    items: "Redis, MongoDB, MySQL",
  },
  {
    title: "Mobile Technologies",
    items: "Flutter, Android Native, IOS, React Native",
  },
  {
    title: "UI & UX Design",
    items:
      "Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, Adobe After Effects",
  },
  {
    title: "Backend Technologies",
    items: "Node, Feather JS, PHP, .NET",
  },
  {
    title: "Frontend Technologies",
    items: "React JS, NEXT",
  },
  {
    title: "Testing Technologies",
    items: "Jmeter, Postman",
  },
];

const Technologies = () => {
  return (
    <section className="relative bg-[#0D0C2B] py-12 px-4 text-white overflow-hidden">
      {/* Background image layer with blur */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover filter blur-xl z-0"
        style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: '100%' }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Technologies We Use
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="border border-white rounded-lg p-8 text-center bg-no-repeat bg-center bg-cover hover:shadow-xl transition-shadow"
            >
              <Image
                height="50"
                width="50"
                src="/desktop.svg"
                className="text-white mb-4 mx-auto flex justify-center"
                alt="Technology Icon"
              />
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-300">{tech.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
