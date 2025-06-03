import Image from "next/image";

export default function ProjectCards({ bannerTitle, apps }) {
  return (
    <div>
      {/* Banner */}
      <div
        className="w-full mt-20 h-64 bg-cover bg-center flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('/website-bg.jpg')",
          backgroundSize: "100%", // constant bg image
        }}
      >
        {bannerTitle}
      </div>

      {/* App Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {apps.map((app, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={app.imageSrc}
                alt={`${app.title} screenshot`}
                width={500}
                height={400}
                className="rounded-xl "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              {/* <h2
                className={`text-2xl font-bold ${
                  app.titleColor || "text-blue-600"
                }`}
              >
                {app.title}
              </h2> */}

              {/* Logo above paragraph */}
              {app.logoSrc && (
                <div className="flex justify-center">
                  <Image
                    src={app.logoSrc}
                    alt={`${app.title} logo`}
                    width={280}
                    height={280}
                    className="mb-2"
                  />
                </div>
              )}
               {/* <h2
                className={`text-2xl font-bold ${
                  app.titleColor || "text-blue-600"
                }`}
              >
                {app.title}
              </h2> */}

              <p className="text-gray-600">{app.description}</p>

              {/* Store Links */}
              <div className="flex gap-4 mt-20 justify-center md:justify-start flex-wrap pt-2">
                {app.webLink && (
                  <a
                    href={app.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/web.png"
                      alt="Web"
                      width={160}
                      height={40}
                    />
                  </a>
                )}
                {app.appStoreLink && (
                  <a
                    href={app.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/appstore.png"
                      alt="App Store"
                      width={160}
                      height={40}
                    />
                  </a>
                )}
                {app.playStoreLink && (
                  <a
                    href={app.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/playstore.png"
                      alt="Google Play"
                      width={160}
                      height={40}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
