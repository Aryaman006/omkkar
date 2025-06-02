import { FaLaptopCode, FaMobileAlt, FaPalette, FaBullhorn, FaPenNib } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode size={40} className="text-purple-700" />,
    description:
      "A website is the face of your online business. We specialize in developing custom web apps, eCommerce apps, landing pages, & CMS as per your business need. Our aim is to provide you the best web solutions required for the growth of your business",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt size={40} className="text-purple-700" />,
    description:
      "With the increasing number of mobile devices, businesses are adopting the mobile platform rapidly. Our expertise in mobile development can give your business a quick boost. We understand the possible mobile version of your existing or new business and craft it beautifully. As well as we make it happen in less possible time.",
  },
  {
    title: "UI & UX Design",
    icon: <FaPalette size={40} className="text-purple-700" />,
    description:
      "We all know the importance of UI & UX for online platforms. A UI & UX is made after thoroughly analyzing the business goals, its audience, and technology availability. Our experience in developing different products helps us in facilitating the best UI & UX for your business",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn size={40} className="text-purple-700" />,
    description:
      "Make your business reach the right set of customers with our strategically designed digital marketing campaigns for your business. The immense growth of digital platforms has made it a suitable way to reach targeted customers and present your brand and product. Our proficiency in various digital channels can boost and sales effectively",
  },
  {
    title: "Content Writing",
    icon: <FaPenNib size={40} className="text-purple-700" />,
    description:
      "We all know that content is the king. Right set of content not only enlightens about absolutely anything but also helps in ranking & reach to millions. With our dedicated content experts, we ensure to deliver high quality, plagiarism free and SEO oriented contents from your business.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f4f8ff] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#091133] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#091133] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
