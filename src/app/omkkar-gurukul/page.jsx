import Image from "next/image";

const data = [
  {
    title: "Holistic Education",
    description:
      "At Gurukul, we go beyond traditional academic subjects. We aim to provide a well-rounded education that focuses on developing every aspect of a student’s personality. Our curriculum includes a blend of academic courses, co-curricular activities, and character-building programs.",
    image: "/education.jpg",
  },
  {
    title: "Academic Excellence",
    description:
      "We have a team of highly qualified and experienced educators who are passionate about teaching. Our teachers foster a love for learning and encourage critical thinking skills. With a student-centered approach, we ensure that each student receives personalized attention and support to excel academically.",
    image: "/coronation.jpg",
  },
  {
    title: "Co-curricular Activities",
    description:
      "We believe that learning extends beyond the classroom. Our co-curricular activities include sports, arts, music, dance, drama, and more. These activities help students develop their creativity, teamwork skills, and physical fitness. We organize inter-house competitions, cultural events, and sports tournaments to provide a platform for students to showcase their talents.",
    image: "/edu-team.jpg",
  },
  {
    title: "Value-based Education",
    description:
      "Character development is an integral part of education at Gurukul. We emphasize the importance of values such as honesty, compassion, respect, and integrity. Our students learn to become responsible citizens who contribute positively to society. We organize workshops, seminars, and community service projects to instill these values in our students.",
    image: "/book.jpg",
  },
  {
    title: "Mindfulness and Meditation",
    description:
      "We understand the significance of mental well-being in today’s fast-paced world. At Gurukul, we introduce students to mindfulness and meditation practices. These techniques help them develop emotional resilience, manage stress, and improve concentration. We have dedicated spaces for quiet reflection and meditation within our campus.",
    image: "/Mindfulness-and-Meditation.jpg",
  },
  {
    title: "Cultural Diversity",
    description:
      "Gurukul celebrates the rich cultural diversity of India. We encourage students to embrace and respect different cultures, languages, and traditions. Through various cultural festivals, food fairs, and exchange programs, we promote intercultural understanding and global awareness.",
    image: "/Cultural-Diversity.jpg",
  },
];

const OmkkarGurukul = () => {
  return (
    <section className="bg-[#f4f8fc] py-16">
         <div className="bg-[#14153e] text-white py-40 flex justify-around text-center">
        <div>
          <h2 className="text-5xl font-semibold">Omkkar Gurukul</h2>
          <p className="mt-8">Omkkar Innovations / Omkkar Gurukul</p>
        </div>
      </div>
      <div className="text-center m-20 max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-10 text-[#18144B]">
          Welcome to Omkkar Gurukul: Unlocking Knowledge and Wisdom
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-md">
          At Omkkar, we believe in the power of education to transform lives and empower individuals to reach their full potential. Our ancient Indian tradition of Gurukul system inspires us to create a holistic learning environment that nurtures students’ intellectual, physical, and spiritual growth.
        </p>
      </div>

      <div className="grid grid-cols-1 px-4 md:px-8 lg:px-16  m-20 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 shadow-md transition"
          >
            <div className="relative w-full h-72 mb-4 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#18144B] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OmkkarGurukul;
