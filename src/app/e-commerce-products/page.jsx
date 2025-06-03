import ProjectCards from "@/components/ProjectsCard";

export default function Project1(){
    return(
        <div className="">
            <ProjectCards
  bannerTitle="E-Commerce Products Backed By Us"
  apps={[
    {
      title: "Ruchi Foodline",
      description:
      "An interface to support the online business of Ruchi, an old and well recognised Indian spices brand is designed and developed with taking care of all the business and market needs along with the seamless customer experience for ordering the authentic trademark products from their home to their home.",
      imageSrc: "/Frame-84.png",
      logoSrc: "/Ruchi-Smartters.png",
      webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      title: "Baysale",
      description:"An interface to support the online business of Ruchi, an old and well recognised Indian spices brand is designed and developed with taking care of all the business and market needs along with the seamless customer experience for ordering the authentic trademark products from their home to their home.",
      imageSrc: "/Group-4768.png",
      logoSrc: "/bayscale.png",
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      title: "Atomaday",
      description:"An interface to support the online business of Ruchi, an old and well recognised Indian spices brand is designed and developed with taking care of all the business and market needs along with the seamless customer experience for ordering the authentic trademark products from their home to their home.",
      imageSrc: "/Group-4767.png",
      logoSrc: "/atomaday.png",
      appStoreLink: "#",
      playStoreLink: "#",
    },
  ]}
/>
        </div>
    )
}