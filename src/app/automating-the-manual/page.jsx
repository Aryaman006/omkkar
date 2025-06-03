import ProjectCards from "@/components/ProjectsCard";

export default function Project1() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Automating The Manual With IOT"
        apps={[
          {
            title: "",
            description: "ciTryambak is a platform for processing Geo-tiff images to locate different object positions over a particular geographical region.",
            imageSrc: "/Frame-76.png",
            logoSrc: "/image-1.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Lokpa is an Astrologer’s predictive assistant for KP system astrology with Artificial Intelligence driven predictive output. First software in KP jyotish to make automated prediction.",
            imageSrc: "/Frame-83-3.png",
            logoSrc: "/lokpa.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
          {
            title: "",
            description: "Custom automatic supply management for an organization with lot.",
            imageSrc: "/Mask-Group-1.png",
            logoSrc: "/gtp.png",
            webLink: "#",
            appStoreLink: "#",
            playStoreLink: "#",
          },
        ]}
      />
    </div>
  );
}