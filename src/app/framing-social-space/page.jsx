import ProjectCards from "@/components/ProjectsCard";

export default function Project1() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Framing Social Space"
        apps={[
          {
            title: "",
            description: "INDIVDO is a short video sharing platform where users can create, share, and watch short videos.",
            imageSrc: "/Group-4774.png",
            logoSrc: "/indivdo.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Apogee is an inclusive playground where you can share your passions, hobbies, connect with like minders, and get paid for having a blast! Apogee provides you with necessary tools to never work a day in your life.",
            imageSrc: "/Frame-42.png",
            logoSrc: "/apogee.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "KemNu is social media where one can find community and get involved – whether it is your school, college, church, or any organization, and grow their network. Build relationships with students and organizations by getting more involved in thousands of local events and causal hangouts that are hosted on KemNu.",
            imageSrc: "/Frame-83-1.png",
            logoSrc: "/kemnu.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "The GodsOwn Diva Application is a Chat application creating an online community of mentors and proteges, Divas & Daises gathering to be methodically mentor and be mentored to become role models based on the principles of Gods word.",
            imageSrc: "/Frame-83-2.png",
            logoSrc: "/god.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
        ]}
      />
    </div>
  );
}