import ProjectCards from "@/components/ProjectsCard";

export default function Project1() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Say Hello To Future With Artificial Intelligence"
        apps={[
          {
            title: "",
            description: "ATHR is a platform which provides Al based KYC for their clients on their services/websites.",
            imageSrc: "/Frame-80-1.png",
            logoSrc: "/athr.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Omnibot is a platform which provides Al based chatbot for their clients on their services/websites.",
            imageSrc: "/Frame-81-1.png",
            logoSrc: "/omnibot.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
        ]}
      />
    </div>
  );
}