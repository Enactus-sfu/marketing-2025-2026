import React from "react";
import Image from "next/image";
import { MdBuild, MdFavorite, MdTrendingUp } from "react-icons/md";

export const metadata = {
  title: "About Us",
  description:
    "Enactus SFU turns community challenges into opportunities to innovate. Learn about our mission, our impact, and the Sustainable Development Goals we work toward.",
};

function page() {
  const items = [
    {
      label: "Mission",
      body: "A community of changemakers using entrepreneurship to address social, economic, and environmental needs. We aim to create measurable impact on others' lives.",
      icons: "MdTrendingUp",
    },
    {
      label: "Vision",
      body: "To be student leaders who inspire positive change through innovation and social entrepreneurship to create a sustainable world.",
      icons: "MdFavorite",
    },
  ];

  const goals = [
    { goal: "No poverty", img: "/images/goal1.png" },
    { goal: "Good health and wellbeing", img: "/images/goal3.png" },
    { goal: "Quality education", img: "/images/goal4.png" },
    { goal: "Clean water and sanitation", img: "/images/goal6.png" },
    { goal: "Decent work and economic growth", img: "/images/goal8.png" },
    { goal: "Industry, innovation and infrastructure", img: "/images/goal9.png" },
    { goal: "Reduced inequalities", img: "/images/goal10.png" },
    { goal: "Sustainable cities and communities", img: "/images/goal11.png" },
    {
      goal: "Responsible consumption and production",
      img: "/images/goal12.png",
    },
    { goal: "Climate action", img: "/images/goal13.png" },
    { goal: "Life below water", img: "/images/goal14.png" },
    { goal: "Life on land", img: "/images/goal15.png" },
    { goal: "Partnerships for the goals", img: "/images/goal17.png" },
  ];

  const images = [
    {
      alt: "A crowd of students cheering.",
      img: "/images/CrowdCheer.png",
      width: "572",
      height: "800",
    },
    {
      alt: "People posing for a photo in front of a wall with the Enactus logo.",
      img: "/images/EnactusWall.jpg",
      width: "578",
      height: "800",
    },
    {
      alt: "Three people cheering.",
      img: "/images/Cheer.jpg",
      width: "727",
      height: "800",
    },
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      <section id="history" className="flex flex-col mb-[16px] md:mb-[48px]">
        <div className="gutter flex flex-col gap-[16px]">
          <h1>
            Welcome to the journey of Enactus SFU, where innovation, passion,
            and excellence have been our guiding principles for 32 years.
            Enactus is a global organization that uses entrepreneurial action as
            a catalyst for progress, taking the concepts of social
            entrepreneurship and the triple bottom-line to heart.
          </h1>

        </div>

        <div className="padding md:p-0">
          <Image
            src="/images/AboutCrowd.jpg"
            alt="A crowd cheering"
            width={1000}
            height={1000}
            className="object-cover min-h-[270px] h-full w-auto md:w-full md:h-auto"
          ></Image>
        </div>
      </section>

      <section className="section-standard mb-[16px] md:mb-[48px]">
        <div className="flex flex-col gap-6 md:gap-[16px] bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-[16px]">
          <MdBuild size={50} color={"var(--color-primary-red)"} />

          <div className="flex flex-col gap-[16px] text-white">
            <h2>Our Impact</h2>
            <div className="flex flex-col gap-[16px]">
              <h3>
                At Enactus SFU, we tackle community issues by turning challenges
                into opportunities to innovate. We empower students to develop
                skills, take initiative, and become the future leaders our
                communities need. Over the past 8 years, our team has dedicated
                over 115,000 volunteer hours, impacting the lives of 8,600+
                individuals.
              </h3>
              <h3>
                As one of the largest organizations at the Beedie School of
                Business, Enactus SFU also has a strong legacy of competitive
                excellence — consistently placing at Enactus Canada’s Regional
                and National Expositions, including multiple podium finishes in
                recent years.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-standard mb-[16px]">
        <div className="flex flex-col md:flex-row flex-wrap gap-[4px] md:gap-[16px] lg:gap-[24px]">
          {images.map((img) => (
            <Image
              key={img.alt}
              src={img.img}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover min-h-[270px] h-full w-auto md:w-[calc(33%-12px)] md:h-auto lg:w-[calc(33%-15px)]"
            ></Image>
          ))}
        </div>
      </section>

      <section className="section-standard mt-[24px] mb-[24px] md:mb-[48px] md:mt-[48px]">
        <div className="flex flex-col gap-[16px] mb-[24px] md:mb-[48px] mt-auto">
          <h1 className="text-primary-yellow">Our Target SDG Goals</h1>
          <h2>
            Enactus SFU is expecting to execute projects for Sustainable
            Development Goals in the 2026/27 academic year.
          </h2>
        </div>

        <div className="flex flex-row flex-wrap mt-[24px] md:mt-[48px] gap-[12px] md:gap-[16px] lg:gap-[24px]">
          {goals.map((goal) => (
            <Image
              key={goal.goal}
              src={goal.img}
              alt={goal.goal}
              width={600}
              height={600}
              className="h-auto w-[calc(50%-6px)] md:w-[calc(15%-3px)] lg:w-[calc(14.28%-21px)]"
            ></Image>
          ))}
        </div>
      </section>

      <section className="section-standard mb-[24px] md:mb-[48px]">
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px] w-fill ">
          {items.map((item) => {
            const IconComponent = item.icons;

            return (
              <div
                className="flex flex-col gap-6 md:gap-[16px] bg-primary-gray px-[24px] py-[24px] w-fill md:w-[50%] h-auto rounded-[16px]"
                key={item.label}
              >
                {IconComponent === "MdTrendingUp" ? (
                  <MdTrendingUp size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}
                {IconComponent === "MdFavorite" ? (
                  <MdFavorite size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}

                <div className="flex flex-col gap-2 text-white">
                  <h2>{item.label} </h2>
                  <h3> {item.body}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
