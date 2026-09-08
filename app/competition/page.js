"use client";
import React from "react";
import Header from "../components/header";
import ImgHero from "../components/imgHero";
import Image from "next/image";
import YearLabel from "../components/yearLabel";

function page() {
  const achievements = [
    {
      header: "2025–2026",
      subheader1: "Nationals",
      body1: "Semifinalist (top 20 out of 80+ schools in Canada)",
      subheader2: "Regionals",
      body2:
        "1st Place (Entrepreneurship), 1st Place (Community Empowerment), 2nd Place (Environmental Sustainability), 2nd Place (Innovation & Impact)",
    },
    {
      header: "2024–2025",
      subheader1: "Nationals",
      body1: "Semifinalist (top 20 out of 80+ schools in Canada)",
      subheader2: "Regionals",
      body2:
        "1st Place (Entrepreneurship), 2nd Place (Youth Empowerment), 2nd Place (Environmental Sustainability), 3rd Place (Innovation & Impact)",
    },
    {
      header: "2023–2024",
      subheader1: "Nationals",
      body1:
        "Semifinalist (top 20 out of 80+ schools in Canada), 2nd Place (Innovation & Impact)",
      subheader2: "Regionals",
      body2:
        "1st Place (Innovation & Impact), 2nd Place (Environmental Sustainability), 2nd Place (Entrepreneurship)",
    },
    {
      header: "2022–2023",
      subheader1: "Regionals",
      body1:
        "3rd Place (Entrepreneurship), 3rd Place (Climate Action)",
      subheader2: "",
      body2: "",
    },
    // {
    //   header: "2021–2022",
    //   subheader1: "Regionals",
    //   body1:
    //     "1st Place (Scotiabank Climate Action Project Idea Pitch), 3rd Place (TD Entrepreneurship Challenge)",
    //   subheader2: "",
    //   body2: "",
    // },
    // {
    //   header: "2020–2021",
    //   subheader1: "Regionals",
    //   body1:
    //     "1st Place (Scotiabank Youth Empowerment), 3rd Place (Western Bank Financial Education Challenge)",
    //   subheader2: "",
    //   body2: "",
    // },
    // {
    //   header: "2018–2019",
    //   subheader1: "Nationals",
    //   body1: "Semi-Finalist (Nationals Exposition)",
    //   subheader2: "Regionals",
    //   body2: "1st Place (Scotiabank Youth Empowerment)",
    // },
    // {
    //   header: "2017–2018",
    //   subheader1: "Nationals",
    //   body1:
    //     "1st Place (Capital One Financial Education Challenge), Semi-Finalist (Nationals Exposition)",
    //   subheader2: "Regionals",
    //   body2:
    //     "1st Place (EcoLiving Challenge), 1st Place (Scotiabank Youth Empowerment Challenge), 1st Place (TD Entrepreneurship Challenge)",
    // },
  ];

  return (
    <div className="flex flex-col gutter gap-[80px] md:gap-[124px]">
      <div className="flex flex-col gap-[0px]">
        <div className="flex flex-col gap-[16px] items-center text-center mb-[24px] md:mb-[48px]">
          <h1>Competition</h1>
          <h2 className="text-primary-yellow max-w-[65ch]">
            At the 2026 Regional Exposition, Simon Fraser University placed in
            all four categories and won 1st in both the TD Entrepreneurship
            and Community Empowerment Challenges — our strongest result in
            years.
          </h2>
        </div>

        <Image
          src="/images/competitionBanner.jpg"
          alt="The Enactus SFU delegation on stage at the 2026 Enactus Canada National Exposition"
          width={1920}
          height={872}
          className="w-full h-fit"
          priority
        />
      </div>

      <section className="flex flex-col gap-[48px] lg:gap-[64px] w-[100%]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> 2026 </h5>
            <h1> Regionals </h1>
          </div>
          <h3>
            {" "}
            Simon Fraser University placed in all four categories, winning 1st
            in both the Entrepreneurship and Community Empowerment Challenges.
          </h3>
        </div>

        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row w-[100%] gap-[32px]">
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/entre-new.jpg"
                alt="The Entrepreneurship Challenge team with their 2026 regional first-place award"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
              />
              <h2 className="text-primary-red">
                {" "}
                1st Place — Entrepreneurship Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Akshaj Shrestha, Francesca Yalung</h3>
                <h3>Designer: Neal Sison</h3>
                <h3>Coaches: Brandon Xu, David Guo, Eva Yueng</h3>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/ce-new.jpg"
                alt="The Community Empowerment Challenge team with their 2026 regional first-place award"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
              />
              <h2 className="text-primary-red">
                {" "}
                1st Place — Community Empowerment Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Patty Rattanaleelart, Liam Santos</h3>
                <h3>Designer: Ellie Kim</h3>
                <h3>Coaches: Wayne Yan Muk, Rachel Vicencio</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[32px] w-[100%]">
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/env-new.jpg"
                alt="The Environmental Sustainability team with their 2026 regional second-place award"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
              />
              <h2 className="text-primary-red">
                {" "}
                2nd Place — Environmental Sustainability Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Winnie Wang, Hussain Naqvi</h3>
                <h3>Designer: Rebecca Yeung</h3>
                <h3>Coaches: Harneet Gill, Sophia Nguyen</h3>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/inno-new.jpg"
                alt="The Innovation & Impact team with their 2026 regional second-place award"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
              />
              <h2 className="text-primary-red">
                {" "}
                2nd Place — Innovation &amp; Impact Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Joaquin Ofreneo, Michelle So</h3>
                <h3>Designer: Michelle Lee</h3>
                <h3>Coaches: Daniel Furlot, Tim MacDougall</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[48px] lg:gap-[64px] w-[100%]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> 2026 </h5>
            <h1> Nationals </h1>
          </div>
          <h3>
            {" "}
            Simon Fraser University reached the semi-finals, earning a Top 20
            finish out of 80+ schools in Canada.{" "}
          </h3>
        </div>

        <div className="flex lg:flex-row flex-col w-[100%] gap-[16px]">
          <Image
            src="/images/nationals-2026-backdrop.jpg"
            alt="The 2026 Nationals presenting team in front of the Enactus backdrop"
            width={1920}
            height={1080}
            className="w-[100%] lg:w-[50%] h-auto"
          />
          <Image
            src="/images/nationals-2026-team.jpg"
            alt="The Enactus SFU 2026 Nationals team"
            width={1920}
            height={1080}
            className="w-[100%] lg:w-[50%] h-auto"
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <h2 className="text-primary-red"> Semifinalist </h2>
          <div className="flex flex-col gap-[2px]">
            <h3>
              Presenters: Lauren Riestra, Cameron Miranda, Amber Holliday, Siya
              Madaan
            </h3>
            <h3>Designer: Joseph Lee</h3>
            <h3>Coaches: Sophia Nguyen, Vinay Aery</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px]">
        <h3 className="text-primary-yellow"> Previous Years </h3>
        <div className="flex flex-col gap-[16px]">
          {achievements.map((project) => (
            <YearLabel
              key={project.header}
              header={project.header}
              subheader1={project.subheader1}
              body1={project.body1}
              subheader2={project.subheader2}
              body2={project.body2}
            ></YearLabel>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
