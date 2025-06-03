import React from "react";

const projects = [
  {
    name: "RAMAKRISHNA MISSION CUTTACK",
    image: "/ss1.png",
    link: "https://example.com/ramakrishna",
  },
  {
    name: "GODS OWN DIVA",
    image: "/ss2.png",
    link: "https://example.com/godsdiva",
  },
  {
    name: "SATTVIC SOUL",
    image: "/ss3.png",
    link: "https://example.com/sattvic",
  },
  {
    name: "AYSUSHMAN FUNDATION",
    image: "/ss4.png",
    link: "https://example.com/aysushman",
  },
  {
    name: "UMEED EIN",
    image: "/ss5.png",
    link: "https://example.com/umeedein",
  },
  {
    name: "UDAYABHANU",
    image: "/ss6.png",
    link: "https://example.com/udayabhanu",
  },
];

const NonProfitProjects = () => {
  return (
    <div className="mt-20">
        <div
        className="w-full mt-20 h-64 bg-cover bg-center flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('/website-bg.jpg')",
          backgroundSize: "100%", // constant bg image
        }}
      >
        Our work for Non profit organisations
      </div>
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our work for Non profit organisations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="text-center">
            <img
              src={project.image}
              alt={project.name}
              className="mx-auto h-40 object-cover rounded shadow-md"
            />
            <h3 className="mt-4 font-semibold">{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <img
                src="/web.png"
                alt="Visit on web"
                className="w-32 mx-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default NonProfitProjects;
