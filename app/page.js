import React from "react";
import Image from "next/image";
import { MdGroups, MdInterests, MdConstruction } from "react-icons/md";

import Button from "./components/button";
import CheckLabel from "./components/checkLabel";
import ProjectCard from "./components/projectCard";
import ImgCarousel from "./components/imgCarousel";

export const metadata = {
  description:
    "Enactus SFU empowers students to build entrepreneurial projects that create measurable impact — 8,600+ lives touched and 115,000+ volunteer hours.",
};

function page() {
  const items = [
    {
      label: "Innovation",
      body: "We bring innovation to all of our initiatives and push our projects past their limits. We strive to be better than we were yesterday.",
      icons: "MdConstruction",
    },
    {
      label: "Passion",
      body: "We foster a work hard play hard culture, bringing passion and joy to our work. We bring energy, purpose, and heart to everything we do.",
      icons: "MdGroups",
    },
    {
      label: "Excellence",
      body: "We hold ourselves to the highest standards in every project, always striving to exceed expectations. We pursue continuous growth and outstanding results.",
      icons: "MdInterests",
    },
  ];

  const stats = [
    { header: "15", body: "Community Initiatives" },
    { header: "1,200+", body: "Members Involved" },
    { header: "8,600+", body: "Lives Impacted" },
    { header: "115,000+", body: "Volunteer Hours" },
    // { header: "15,000+", body: "Projects throughout 2012-2025." },
  ];

  const projects = [
    {
      name: "SKYES",
      description:
        "SKYES is an entrepreneurial education initiative that empowers underprivileged youth across South and Southeast Asia to become changemakers in their communities. Through experiential learning and mentorship, students gain the skills and confidence to transform their ideas into impact.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/SKYES-Banner.jpg",
    },
    {
      name: "Unify",
      description:
        "Unify is a digital platform that helps newcomers to Canada feel at home faster by combining trusted information, community connection, and personalized guidance in one place. Through practical lessons, an AI companion, and local events, Unify turns the challenges of settling in Canada into a clear, confident, and connected journey.",
      // cta: "google.ca",
      linkedin:
        "https://www.linkedin.com/company/unify-social/posts/?feedView=all",
      instagram: "https://www.instagram.com/unifysocial.ca/",
      image: "/images/Unify-Banner.png",
    },
    {
      name: "Alara",
      description:
        "Meet Alara, an eco-friendly bioplastic born from Earth’s waters, designed for Earth’s future. Alara is leveraging Earth’s natural resources to create a 100% biodegradable bioplastic to tackle the plastic pollution crisis, pushing the economy towards a more sustainable future.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/Alara-Banner.jpg",
    },
    {
      name: "Nourish",
      description:
        "Nourish is a student-led social enterprise that transforms cosmetically imperfect fruit from local grocery stores and distributors into high-protein, high-fiber, low-sugar gummies to promote functional and sustainable snacking.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      instagram: "https://www.instagram.com/nourishcandy/",
      image: "/images/Nourish-Banner.png",
    },

    {
      name: "NextSpark",
      description:
        "NextSpark is a hands-on STEM education program that provides interactive kits and engaging workshops to help students learn science, technology and engineering through real-world applications. By combining fun, discovery-based learning with structured support, NextSpark empowers students to build STEM skills and confidence in an accessible and exciting way",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/nextspark-new.jpg",
    },

    {
      name: "Renovo",
      description:
        "Renovo is a not-for-profit that empowers Canadian veterans and Indigenous communities through multi-week business programs. Offering mentorship, hands-on start-up development, and seed funding opportunities, we renew purpose today, to reimagine tomorrow together",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/renovo-new.png",
    },

    {
      name: "SensMS",
      description:
        "SensMS empowers women with Multiple Sclerosis to better understand and manage the connection between their hormonal cycles and disease symptoms. Through a home-based digital app, it integrates health tracking, mental well-being, and community support to promote personalized, female-specific MS care",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/SensMS-Banner.jpeg",
    },

    {
      name: "Second Savour",
      description:
        "Second Savour reduces food waste by upcycling discarded citrus peels into delicious candied treats. Founded by SFU students in Burnaby, BC, it transforms produce that would otherwise be thrown away into a sweet, sustainable snack — leaving no part of the fruit behind.",
      image: "/images/secondsavour-banner.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[32px] md:gap-[48px]">
      <section className="flex justify-center relative h-[250px] min-[30rem]:h-auto overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Enactus SFU members at the annual team photo"
          width={1920}
          height={1080}
          className="object-cover saturate-85"
          priority
        />

        {/* Absolutely positioned centered text with golden glow effect */}
        <div className="absolute inset-0 flex flex-col gap-[16px] lg:gap-[27px] items-center justify-center">
          <h1 className="hero-text text-white text-center golden-glow">
            FUELED BY <br /> INNOVATION
          </h1>

          <h1 className="hero-text text-white text-center golden-glow">
            LED WITH <br /> PASSION
          </h1>

          <h1 className="hero-text text-white text-center golden-glow">
            DEFINED BY <br /> EXCELLENCE
          </h1>
        </div>
      </section>

      <section className="padding mb-[48px]">
        <div className="flex flex-col gap-[12px]">
          <h2>
            {" "}
            We build projects that create a positive impact on our community.
          </h2>

          <div className="flex flex-col gap-[8px] mt-[12px] mb-[24px]">
            <h6 className="text-primary-yellow">But what does that mean?</h6>
            <h3>
              {" "}
              What others see as challenges, we see as opportunities to
              innovate. With an active member base across multiple
              concentrations and faculties, Enactus SFU continues to expand
              sustainable projects yearly, empowering students to develop
              entrepreneurial skills and become future leaders.{" "}
            </h3>
          </div>

          <Button size="large" style="primary" cta="/about">
            Our Story
          </Button>
        </div>
      </section>

      <section className="section-standard">
        <div className="flex flex-col gap-[16px] w-fill ">
          {items.map((item) => {
            const IconComponent = item.icons;

            return (
              <div
                className="flex flex-col gap-6 md:flex-row md:gap-12 bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-[16px]"
                key={item.label}
              >
                {IconComponent === "MdConstruction" ? (
                  <MdConstruction
                    size={50}
                    color={"var(--color-primary-red)"}
                  />
                ) : (
                  ""
                )}
                {IconComponent === "MdGroups" ? (
                  <MdGroups size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}
                {IconComponent === "MdInterests" ? (
                  <MdInterests size={50} color={"var(--color-primary-red)"} />
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

      <section className="padding">
        <div className="flex flex-row md:flex-row flex-wrap grow min-[83rem]:flex-nowrap mb-[48px] gap-[20px]">
          {stats.map((stat) => (
            <CheckLabel
              header={stat.header}
              body={stat.body}
              key={stat.header}
            ></CheckLabel>
          ))}
        </div>
      </section>

      <section className="section-standard flex flex-col mb-[48px] gap-[20px] w-full mx-auto ">
        <div className="flex flex-col lg:flex-row gap-[20px] flex-wrap  justify-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              img={project.image}
              header={project.name}
              body={project.description}
            ></ProjectCard>
          ))}
        </div>
      </section>

      <section>
        <ImgCarousel
          Carousel={[
            { name: "2024", img: "/images/Hero-2024.png" },
            { name: "2023", img: "/images/Hero-2023.jpg" },
            { name: "2022", img: "/images/Hero-2022.jpg" },
          ]}
        />
      </section>
    </div>
  );
}

export default page;
