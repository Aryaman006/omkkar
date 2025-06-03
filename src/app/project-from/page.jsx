import ProjectCards from "@/components/ProjectsCard";

export default function Project1() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Project From Some Different Domains"
        apps={[
          {
            title: "",
            description: "Smart Key realty is a platform for buying, selling and renting property without any hassle and with the security of its broker platform.",
            imageSrc: "/Frame-80.png",
            logoSrc: "/smart-key.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Smartzone is a Smart Apartment Solution for ordering different services",
            imageSrc: "/Group-4781.png",
            logoSrc: "/smart-zone.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Confiscore gives you a dedicated image management tool to measure your social acceptance in from of numerical value that is called confidence score.",
            imageSrc: "/Group-4780.png",
            logoSrc: "/Conficore-Smartters.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
        ]}
      />
    </div>
  );
}