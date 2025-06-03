import ProjectCards from "@/components/ProjectsCard";

export default function Project1(){
    return(
        <div className="">
            <ProjectCards
  bannerTitle="Engineering The Flow Of Healthcare"
  apps={[
    {
      title: "Kin Care",
      description:
        "The Kin Care is a healthcare aggregator platform where users can manage and view customized analytics for different medical reports of them and their family members.",
      imageSrc: "/Frame-83.png",
      logoSrc:"/kincare.png",
      webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      title: "AUSICARE",
      description:
        "Ausicare is a uniquely designed dedicated platform for healthcare services that allows users to explore and get almost all kinds of health needs at one place.",
      imageSrc: "/Group-4772.png",
      logoSrc:"/Ausicare-Smartters.png",
       webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      title: "MAKE WAY",
      description:
        "Make Way is an internal management platform to keep track of daily work for the medicine representatives for the organization Make Way FFR.",
      imageSrc: "/Frame-85.png",
      logoSrc:"/make-way.png",
       webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      title: "Cardiac Trials",
      titleColor: "text-red-600",
      description:
        "Cardiac Trials is an educational tool that aggregates landmark clinical trials within cardiology at your fingertips.",
      imageSrc: "/Frame-85-1.png",
      logoSrc:"/Cardiac-Trials.png",
      webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
    },
  ]}
/>

        </div>
    )
}