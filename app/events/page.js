import React from "react";
import Header from "../components/header";
import ImgLabel from "../components/imglabel";
import ConnectCard from "../components/connectCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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

      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[8px]">
          <h2>Upcoming Events</h2>
          <h3 className="opacity-60">
            Follow our Luma calendar to see what&apos;s coming up and get
            notified when registration opens.
          </h3>
        </div>

        <iframe
          src="https://luma.com/embed/calendar/cal-RsECMxK7cyQW34Y/events?lt=dark"
          title="Enactus SFU events calendar"
          className="w-full h-[450px] rounded-[4px] border border-[#bfcbda88]"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>

        <ConnectCard
          name="Luma"
          cta="Events"
          ctaLink="https://luma.com/enactussfu"
          icon={<CalendarMonthIcon />}
        ></ConnectCard>
      </div>
    </div>
  );
}

export default page;
