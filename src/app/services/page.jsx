import Image from 'next/image';

const services = [
  {
    title: "Website Development",
    description: "A website is the face of your online business. We specialize in developing custom web apps, eCommerce apps, landing pages, & CMS as per your business need. Our aim is to provide the best web solutions required for the growth of your business.",
    expertise: [
      "Website/Landing pages development",
      "Custom web app development",
      "E-Commerce development",
      "CMS web development",
    ],
    image: "/web.jpg",
  },
  {
    title: "Mobile Application Development",
    description: "With the increasing number of mobile devices, businesses are adopting the mobile platform rapidly. Our expertise in mobile development can give your business a quick boost. We understand the possible mobile version of your existing or new business and craft it beautifully. As well as we make it happen in less possible time.",
    expertise: [
      "Android App Development",
      "iOS App Development",
      "Desktop App Development",
    ],
    image: "/mobile.jpg",
  },
  {
    title: "UI & UX Design",
    description: "We all know the importance of UI & UX for online platforms. A UI & UX is made after thoroughly analyzing the business goals, its audience, and technology availability. Our experience in developing different products helps us in facilitating the best UI & UX for your business",
    expertise: [
      "Website/Webapp UI & Design",
      "Mobile App UI & Design",
      "Landing page Design",
      "Prototyping",
    ],
    image: "/app.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Make your business reach the right set of customers with our strategically designed digital marketing campaigns for your business. The immense growth of digital platforms has made it a suitable way to reach targeted customers and present your brand and product. Our proficiency in various digital channels can boost and sales effectively",
    expertise: [
      "Search Engine Optimisation",
      "Search Engine Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Influencer Marketing",
    ],
    image: "/digital.jpg",
  },
  {
    title: "Content Writing",
    description: "We all know that content is the king. Right set of content not only enlightens about absolutely anything but also helps in ranking & reach to millions. At Omkkarinnovations, With our dedicated content experts, we ensure to deliver high quality, plagiarism free and SEO oriented contents from your business.",
    expertise: [
      "Webpage Content writing",
      "Copy writing",
      "Technical writing",
    ],
    image: "/content.jpg",
  },
  {
    title: "Staffing",
    description: "Omkkar Innovations is always there for your staffing solutions. We help clients meet their recruitment needs and job seekers find their dream job.You can count on us to provide whatever staffing solution your business needs",
    expertise: [],
    image: "/team.jpg",
  },
  {
    title: "Permanent Recruitment",
    description: `We specialize in end-to-end permanent recruitment solutions.Right from identifying to placing, we offer the top talent opportunities in multiple industries and sectors, ensuring a successful long-term fit for both the candidate and the hiring company

Our Permanent solutions are designed to provide you access to a pool of fully screened and qualified professionals that are the right fit for your company. We can find perfectly suited candidates from any industry of your choice with the fastest turnaround time. By engaging PACE Recruit to handle your recruitment needs you can expect to find the right talent for your job roles, thus enabling you to take business decisions confidently without worrying about talent gaps and future uncertainties. Our experience as a top placement agency can help your organisation find the resources you need to shape your future. With us, finding the ideal candidate is just a phone call away.`,
    expertise: [],
    image: "/crowd.jpg",
  },
  {
    title: "Contract Staffing",
    description: `Omkkar Innovations offers robust and well-planned contract staffing services to the companies

To go with the ebb and flow of the market, we at Omkkar Staffing, provide you with contract staffing solutions which have proven to be a better solution for workforce & compliance management. Organisations opt for contractual staffing in cases when they have some extra projects on-board which need to be fulfilled in a certain time period.At Omkkar Staffing, we take charge of the complete process to provide the contractual staffing solutions in a hassle-free manner. We embrace flexibility by employing temporary staff and offering business freedom for enhanced productivity. Whether you want to hire an individual or a complete team, we provide you with an exceptionally qualified workforce fitting your requirements.`,
    expertise: [],
    image: "/team2.jpg",
  },
  {
    title: "Executive Placement",
    description: "Hiring a middle or senior management is not that easy. We at Omkkar put in our rigorous approach and a thorough understanding of different industries and the functional roles as well as a directive access to senior executives. We specialize in providing or staffing of the best quality and experienced people in shortest time span to advance company strategies and achieve outstanding results.We specialize in recruitment of Board Members/ CEO’s/ CTO’s/ CFO’s/ CIO’s/ Country Heads/ Directors/ Vice Presidents & General Managers etc for almost all industries / domains (including IT, Telecom, Insurance, Retail, BPO, Banking, Auto, Power, Textile, Services, Consulting and other Manufacturing/ Engineering Industries etc.) placing them PAN – India.We have a strong network of relationships with top executives across major industries, giving us perfect direction / view of leaders in every function and sector of business. Executives trust us to bring them opportunities that represent a good fit with their capabilities and ambitions",
    expertise: [],
    image: "/research.jpg",
  },
];

const ServicesSection = () => {
  return (
    <>
     <div className="bg-[#14153e] mt-20 text-md text-white py-40 flex justify-around text-center">
        <div>
          <h2 className="text-5xl font-semibold">Services</h2>
          <p className="mt-8">Omkkar Innovations / Services</p>
        </div>
      </div>
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={400}
              className="w-full object-contain"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            {service.expertise.length > 0 && (
              <div>
                <h4 className="font-medium">Our Expertise</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {service.expertise.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default ServicesSection;
