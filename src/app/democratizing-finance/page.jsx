import ProjectCards from "@/components/ProjectsCard";

export default function Project3() {
  return (
    <div className="">
      <ProjectCards
        bannerTitle="Democratizing Finance With Technology"
        apps={[
          {
            title: "",
            description: "Propay is a USA based payment platform which goal is to make the online payment system more secure, robust, and user-friendly, which can attract more users to abandon offline payments and join the Digital Economy.",
            imageSrc: "/Frame-78.png",
            logoSrc: "/Propay.png",
            webLink: "",
            appStoreLink: "",
            playStoreLink: "",
          },
          {
            title: "",
            description: "Ample pay is a USA based loan application which allows users to generate their credit score and avail loan according to their eligibility, and make the payment of the installments from the application itself.",
            imageSrc: "/Frame-77.png",
            logoSrc: "/ample-pay.png",
            appStoreLink: "",
            playStoreLink: "",
          },
          {
            title: "",
            description: "Vepay is Africa based payement platform which allows user to make online/ digital payments from Africa to other parts of the world, send invoice and receive payment for the business deals.",
            imageSrc: "/Frame-79.png",
            logoSrc: "/ve-pay.png",
            appStoreLink: "",
            playStoreLink: "",
          },
        ]}
      />
    </div>
  );
}