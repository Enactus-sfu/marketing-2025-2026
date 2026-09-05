import React from "react";
import IconLabel from "../components/iconLabel";
import ImgHero from "../components/imgHero";
import Image from "next/image";
import {
  MdBolt,
  MdInsights,
  MdViewInAr,
  MdFactory,
  MdRecycling,
  MdHandshake,
} from "react-icons/md";
import Button from "../components/button";
import Table from "../components/table";

export const metadata = {
  title: "Forward Vision",
  description:
    "An award-winning interdisciplinary entrepreneurship program bringing together over 40 students and 20 industry professionals to tackle real sustainability challenges.",
};

const timelineColumns = ["Event", "Date & Time", "Location", "Details"];
const timelineRows = [
  [
    "The Impact Lab",
    "Oct 14 · 5:30–8:00 PM",
    "SUB Ballroom, SFU Burnaby",
    "Kick off Forward Vision with a sustainability-focused workshop. Hear short talks and discussion panels from established professionals, researchers, and thought leaders.",
  ],
  [
    "Module 1 — Needs Assessment",
    "Oct 18 · 5:00–5:30 PM",
    "Online",
    "Review the criteria for the pitch presentation and learn how to run a needs assessment that grounds your solution in evidence.",
  ],
  [
    "Module 2 — Business Model Canvas",
    "Oct 19 · 5:00–5:30 PM",
    "Online",
    "Map your idea onto the Business Model Canvas and learn how to structure partnerships. The mentor evaluation period opens — teams book meeting times with their mentors.",
  ],
  [
    "Module 3 — Presentation Building",
    "Oct 22 · 6:00–6:45 PM",
    "Online",
    "Build your presentation and prepare for risks and mitigations questions. Mentor evaluations continue as teams refine their pitches.",
  ],
  [
    "Capstone Pitch Competition",
    "Oct 25 · 10 AM–3 PM",
    "Harbour Centre, SFU Vancouver",
    "Present your evidence-based, scalable solution to a panel of judges, showcasing the knowledge, skills, and insights developed throughout the program.",
  ],
];

const itineraryColumns = ["Segment", "Duration", "Details"];
const itineraryRows = [
  [
    "Welcome Remarks",
    "30 minutes",
    "Morning introduction, team divisions announced, agenda overview, intro video, and a keynote from our presenting sponsor.",
  ],
  [
    "First-Round Presentations",
    "50 minutes",
    "Every team pitches: 5 minute presentation followed by a 5 minute Q&A. Afterwards, teams have time to revise their slides and make changes.",
  ],
  [
    "Break & Scoring",
    "30 minutes",
    "Each team's best presentation score is taken, and scores are calculated to determine the final teams.",
  ],
  [
    "Final Presentations",
    "40 minutes",
    "The top 4 teams advance and are evaluated: 5 minute presentation followed by a 7 minute Q&A.",
  ],
  [
    "Keynote Speaker",
    "10 minutes",
    "A keynote on sustainable development and sustainable business.",
  ],
  [
    "Closing & Winners",
    "20 minutes",
    "Group photo, raffle prizes drawn, thank yous to sponsors and collaborators, and winners announced.",
  ],
];

function page() {
  return (
    <div className="flex flex-col mt-[16px] md:mt-0 gap-[16px] md:gap-[64px] pb-[48px]">
      <ImgHero
        header={"Forward Vision"}
        subheader={
          "An award-winning interdisciplinary entrepreneurship program bringing together over 40 students and 20 industry professionals to develop innovative, business-oriented solutions to real-world sustainability challenges."
        }
        img={"/images/finalForwardVision.jpg"}
      />

      <div className="section-standard gap-[16px] md:gap-[24px]">
        <h2> What To Expect At Forward Vision</h2>
        <h3 className="text-primary-yellow">
          This year&apos;s theme, Sustainable Business, challenges students to
          move beyond solution-building and critically examine the
          environmental and social challenges facing their communities.
        </h3>
        <h3 className="opacity-60">
          Participants from business, engineering, design, technology, and
          environmental disciplines work in interdisciplinary teams — supported
          by industry mentors and educational modules covering needs
          assessment, business planning, partnerships, and pitching — before
          presenting evidence-based, scalable solutions to a panel of judges.
        </h3>
      </div>

      <section className="section-standard flex flex-col lg:flex-row gap-[16px] md:gap-[24px]">
        <IconLabel
          header={"Entrepreneurship for Impact"}
          body={
            "Teams develop small enterprises that address real-world sustainability challenges through a sustainability-focused symposium, learning modules, mentorship, and a capstone pitch competition."
          }
          icon={<MdInsights className="text-primary-red text-4xl" />}
        />

        <IconLabel
          header={"Mentorship & Collaboration"}
          body={
            "A structured, role-based team format simulates the experience of working in a startup, with industry mentors supporting teams as they refine their ideas ahead of the competition."
          }
          icon={<MdBolt className="text-primary-red text-4xl" />}
        />

        <IconLabel
          header={"Investor-Style Pitching"}
          body={
            "The program culminates in a final pitch competition where teams present evidence-based, scalable solutions to a panel of judges."
          }
          icon={<MdViewInAr className="text-primary-red text-4xl" />}
        />
      </section>

      <section className="section-standard gap-[24px] md:gap-[48px]">
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> Guiding Themes </h5>
            <h1> UN Sustainable Development Goals </h1>
          </div>
          <h3>
            The competition centers on three SDGs — guiding themes rather than
            strict parameters, giving teams the flexibility to explore a wide
            range of social, environmental, and business challenges.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[24px]">
          <IconLabel
            subheader={"SDG 9"}
            header={"Industry, Innovation & Infrastructure"}
            body={
              "Build resilient infrastructure and foster innovation that serves communities sustainably."
            }
            icon={<MdFactory className="text-primary-red text-4xl" />}
          />
          <IconLabel
            subheader={"SDG 12"}
            header={"Responsible Consumption & Production"}
            body={
              "Rethink how goods are made and consumed to reduce waste and environmental impact."
            }
            icon={<MdRecycling className="text-primary-red text-4xl" />}
          />
          <IconLabel
            subheader={"SDG 17"}
            header={"Partnerships for the Goals"}
            body={
              "Structure partnerships that multiply impact across sectors and disciplines."
            }
            icon={<MdHandshake className="text-primary-red text-4xl" />}
          />
        </div>
      </section>

      <section className="section-standard gap-[24px] md:gap-[48px]">
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> October 14–25 </h5>
            <h1> Program Timeline </h1>
          </div>
          <h3>
            Ahead of the Capstone Pitch Competition, teams take part in a
            sustainability-focused workshop followed by three online learning
            modules covering needs assessment, business model development, and
            partnership and pitch building.
          </h3>
        </div>

        <Table columns={timelineColumns} rows={timelineRows} />
      </section>

      <section className="section-standard gap-[24px] md:gap-[48px]">
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow">
              October 25 · Harbour Centre
            </h5>
            <h1> Pitch Competition Format </h1>
          </div>
          <h3>
            The capstone day runs from 10 AM to 3 PM at SFU Vancouver, from
            welcome remarks through final presentations and the announcement of
            winners.
          </h3>
        </div>

        <Table columns={itineraryColumns} rows={itineraryRows} />
      </section>

      <div className="flex flex-col gap-[24px] md:gap-[48px] padding">
        <Image
          src={"/images/FV.png"}
          alt={"Forward Vision banner"}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        <h2>
          If the idea of social entrepreneurship excites you, we encourage you
          to participate in Forward Vision! Spots are limited, so be sure to
          register your team before the deadline.
        </h2>

        <div className="flex justify-center md:justify-normal pb-[24px]">
          <Button size="large" style="primary" cta="./events">
            {" "}
            ← Return to Events{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
