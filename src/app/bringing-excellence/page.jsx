import ProjectCards from "@/components/ProjectsCard";

export default function Project1() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Bringing Excellence To Student"
        apps={[
          {
            title: "",
            description: "Jupion Classes is a Virtual educational learning application.Jupion Classes are in the form of pre-recorded classes, live interaction clearing classes with your respective subscription. classes, live recorded classes, and doubt",
            imageSrc: "/maskgroup.png",
            logoSrc: "/jupionclasses-Smartters.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: `A-PLUS-The Learning App, India’s largest online learning program! A perfect blend of engaging video lessons and personalized learning, the app is designed to help
students practice, learn and understand concepts in an in-depth and easy-to-grasp manner.`,
            imageSrc: "/Frame-85-2.png",
            logoSrc: "/A.png",
             webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Global Success Systems Group, helps organizations to improve the PEOPLE and PROCESS through professional training, Consulting and Coaching.",
            imageSrc: "/Frame-86.png",
            logoSrc: "/logo-1.png",
             webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
        ]}
      />
    </div>
  );
}