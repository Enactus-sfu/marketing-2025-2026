import React from "react";
import Chat from "./chat";

export const metadata = {
  title: "Forward Vision Assistant",
  description:
    "Ask the Forward Vision assistant about the program schedule, your team's stream, the pitch format, or your sustainability idea.",
};

function page() {
  return (
    <div className="flex flex-col mt-[16px] md:mt-0 gap-[24px] md:gap-[48px] pb-[48px]">
      <div className="section-standard gap-[16px] md:gap-[24px] md:pt-[48px]">
        <div className="flex flex-col gap-[12px]">
          <h5 className="text-primary-yellow">Forward Vision · October 14–25</h5>
          <h1>Ask the Forward Vision Assistant</h1>
        </div>
        <h3 className="opacity-60">
          Questions about the schedule, your stream, the pitch format, or the idea your team is working on?
          Ask here and get an answer straight away.
        </h3>
      </div>

      <section className="section-standard">
        <Chat />
      </section>
    </div>
  );
}

export default page;
