import React from "react";
import Header from "../components/header";
import ImgLabel from "../components/imglabel";
import ConnectCard from "../components/connectCard";
import IconLabel from "../components/iconLabel";
import { MdCalendarMonth, MdPlace, MdHowToReg } from "react-icons/md";

export const metadata = {
  title: "Events",
  description:
    "Forward Vision, Venture Connect and more — workshops, pitch competitions and networking nights hosted by Enactus SFU at SFU Burnaby and Harbour Centre.",
};

function page() {
  return (
    <div className="flex flex-col padding py-[24px] md:py-[48px] gap-[48px]">
      <Header
        header="Our Events"
        body="Discover our educational events hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship."
      ></Header>

      <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full overflow-hidden">
        <ImgLabel
          header="Forward Vision"
          body="Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style."
          cta1="Learn More"
          cta1link="./forwardVision"
          // cta2="Register"
          img="/images/FV.png"
        ></ImgLabel>

        <ImgLabel
          header="Venture Connect"
          body="Venture Connect is an afternoon workshop and fireside chat event that provides aspiring entrepreneurs with the opportunity to create meaningful connections with successful entrepreneurs. Students will be able to hear from real experiences and learn what it takes to build a business of their own!"
          cta1="Learn More"
          cta1link="./ventureconnect"
          // cta2="Register"
          img="/images/VentureConnect.jpg"
        ></ImgLabel>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-[24px] lg:gap-[48px] w-full">
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
            ></IconLabel>
          </div>

          <ConnectCard
            name="Luma"
            cta="Events"
            ctaLink="https://luma.com/enactussfu"
            icon={<MdCalendarMonth size={24} />}
          ></ConnectCard>
        </div>

        <iframe
          src="https://luma.com/embed/calendar/cal-RsECMxK7cyQW34Y/events?lt=dark"
          title="Enactus SFU events calendar"
          className="w-full lg:w-[700px] lg:shrink-0 h-[560px] lg:h-[700px] rounded-[16px] border border-white/10"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
}

export default page;
