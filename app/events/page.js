import React from "react";
import Header from "../components/header";
import ImgLabel from "../components/imglabel";
import IconLabel from "../components/iconLabel";
import { MdPlace, MdHowToReg } from "react-icons/md";

export const metadata = {
  title: "Events",
  description:
    "Forward Vision and more — workshops, pitch competitions and networking nights hosted by Enactus SFU at SFU Burnaby and Harbour Centre.",
};

function page() {
  return (
    <div className="flex flex-col padding py-[24px] md:py-[48px] gap-[48px]">
      <Header
        center
        header="Our Events"
        body="Discover our educational events hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship."
      ></Header>

      <ImgLabel
        header="Forward Vision"
        body="Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style."
        cta1="Learn More"
        cta1link="/forwardVision"
        img="/images/FV.png"
        imgAlt="Participants, judges and organizers gathered at Forward Vision"
      ></ImgLabel>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-[24px] lg:gap-[48px] w-full">
        <div className="flex flex-col gap-[24px] w-full lg:flex-1">
          <div className="flex flex-col gap-[16px]">
            <h2>Upcoming Events</h2>
            <h3 className="opacity-60">
              From pitch competitions to workshops and networking nights, every
              event we run lives on one calendar. Follow it to see what&apos;s
              coming up and get notified when registration opens.
            </h3>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col gap-[16px] md:gap-[24px] lg:gap-[16px]">
            <IconLabel
              icon={<MdPlace size={35} className="text-primary-yellow" />}
              header="On campus and downtown"
              body="Events run across SFU Burnaby and Harbour Centre, so there's usually one close to wherever you study."
            ></IconLabel>

            <IconLabel
              icon={
                <MdHowToReg size={35} className="text-primary-yellow" />
              }
              header="Register on Luma"
              body="Every event opens for registration on the calendar. Subscribe once and you'll hear about new events as we announce them."
              cta="View Enactus Events"
              ctaLink="https://luma.com/enactussfu"
            ></IconLabel>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] w-full lg:w-[700px] lg:shrink-0 lg:self-stretch lg:min-h-[560px]">
          <iframe
            src="https://luma.com/embed/calendar/cal-RsECMxK7cyQW34Y/events?lt=dark"
            title="Enactus SFU events calendar"
            className="w-full h-[560px] lg:h-auto lg:flex-1 rounded-[16px] border border-white/10"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
          <p className="text-[13px] text-white/60 text-right">
            (click to view event details)
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
