import React from 'react';

const ConnectSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Interested? Let's connect!
      </h2>
      <a
        href="/contact-us" // update this link if needed
        className="inline-block bg-[#18144B] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0f0c34] transition duration-300"
      >
        Click here
      </a>
    </section>
  );
};

export default ConnectSection;
