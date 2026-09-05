import React from "react";
import SponsorImgMed from "../components/sponsorImgMed.js";
import SponsorImgSmall from "../components/sponsorImgSmall.js";
import SponsorBanner from "../components/sponsorBanner.js";
import Button from "../components/button.js";

export const metadata = {
  title: "Sponsors & Partners",
  description:
    "Partner with Enactus SFU. Meet the sponsors backing our projects and find out how your organization can support student-led social enterprise.",
};

function page() {
  const partnerList = [
    {
      img: "/images/Redbull.png",
      sponsor: "RedBull",
      width: "696",
      height: "696",
    },
    {
      img: "/images/idance.jpg",
      sponsor: "iDance",
      width: "512",
      height: "512",
    },
    {
      img: "/images/ipop.jpg",
      sponsor: "iPop",
      width: "857",
      height: "398",
    },
    {
      img: "/images/ModoYoga.jpg",
      sponsor: "Modo Yoga",
      width: "1600",
      height: "345",
    },
    {
      img: "/images/RumbleBoxing.jpg",
      sponsor: "Rumble Boxing",
      width: "300",
      height: "300",
    },
    {
      img: "/images/SkoahFacialShop.jpg",
      sponsor: "Skoah.",
      width: "1084",
      height: "834",
    },
    {
      img: "/images/VCClogo.avif",
      sponsor: "Varshney Capital Corp",
      width: "160",
      height: "116",
    },
    {
      img: "/images/VELLUMWELLNESS.jpg",
      sponsor: "Vellum Wellness",
      width: "333",
      height: "113",
    },
    {
      img: "/images/VancouverWaterAdventures.jpg",
      sponsor: "Vancouver Water Adventures",
      width: "550",
      height: "550",
    },
  ];

  const forwardVisionList = [
    {
      img: "/images/Redbull.png",
      sponsor: "RedBull",
      width: "696",
      height: "696",
    },
    {
      img: "/images/Popeyes.png",
      sponsor: "Popeye's Supplements",
      width: "540",
      height: "539",
    },
    {
      img: "/images/OldSpaghetti.png",
      sponsor: "The Old Spaghetti Factory",
      width: "546",
      height: "545",
    },
    {
      img: "/images/PandorasLocks.png",
      sponsor: "Pandora's Locks",
      width: "213",
      height: "173",
    },
    {
      img: "/images/VMMLogo.png",
      sponsor: "Vancouver Maritime Museum",
      width: "546",
      height: "545",
    },
    {
      img: "/images/IntelligentChange.png",
      sponsor: "Intelligent Change",
      width: "540",
      height: "540",
    },
    { img: "/images/Exit.png", sponsor: "Exit", width: "540", height: "540" },
    {
      img: "/images/THLogo.png",
      sponsor: "TH",
      width: "540",
      height: "540",
    },
    {
      img: "/images/PromoSapien.png",
      sponsor: "Promo Sapien",
      width: "540",
      height: "540",
    },
    {
      img: "/images/Freesia.png",
      sponsor: "Freesia Soap Company",
      width: "540",
      height: "540",
    },
    {
      img: "/images/BaaadAnnas.png",
      sponsor: "Baaad Anna's",
      width: "540",
      height: "540",
    },
    {
      img: "/images/NordicYarn.png",
      sponsor: "Nordic Yarn",
      width: "540",
      height: "540",
    },
    { img: "/images/WCSLogo.png", sponsor: "WCS", width: "776", height: "662" },
    {
      img: "/images/ULogo.png",
      sponsor: "U",
      width: "776",
      height: "662",
    },
    {
      img: "/images/WesternSkyBooks.png",
      sponsor: "Western Sky Books",
      width: "776",
      height: "662",
    },
  ];

  return (
    <div className="gutter flex flex-col gap-[54px] md:gap-[64px] lg:gap-[128px]">
      <div className="">
        <h3 className="text-primary-yellow mb-5">Sponsorships</h3>

        <h1>Thank you to all our partners and sponsors!</h1>

        <div className="flex gap-[24px] mt-[24px]">
          <Button
            size="large"
            variant="primary"
            cta="mailto:info@enactussfu.ca?subject=Hello%20Enactus%20SFU"
          >
            Become a Sponsor
          </Button>
          <Button
            size="large"
            variant="primary"
            target="_blank"
            cta="https://drive.google.com/file/d/13Ty4E8oLsxcfAWbw0wiKss8pVkTjZwdl/view?usp=drive_link"
          >
            Sponsorship Package
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1>Our Partners</h1>

        <div className="flex flex-col md:flex-row gap-[20px] justify-baseline">
          <SponsorBanner
            img="/images/EnactusLogo.png"
            sponsor="Enactus Canada"
            width={457}
            height={200}
          ></SponsorBanner>

          <SponsorBanner
            img="/images/BeedieLogo.png"
            sponsor="SFU Beedie School of Business"
            width={798}
            height={150}
          ></SponsorBanner>
        </div>

        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[20px]">
          {partnerList.map((sponsor) => (
            <SponsorImgMed
              key={sponsor.sponsor}
              img={sponsor.img}
              sponsor={sponsor.sponsor}
              width={sponsor.width}
              height={sponsor.height}
            ></SponsorImgMed>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mb-8">Our Partners for Forward Vision</h1>

        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[20px]">
          {forwardVisionList.map((sponsor) => (
            <SponsorImgSmall
              key={sponsor.sponsor}
              img={sponsor.img}
              sponsor={sponsor.sponsor}
              width={sponsor.width}
              height={sponsor.height}
            ></SponsorImgSmall>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:max-w-[60vw]">
        <h1>Interested in becoming a partner?</h1>
        <h3 className="text-white">
          If you would like to partner with us, you can contact us here at the
          button below and one of our staff members will get back to you.
        </h3>
        <Button
          size="large"
          variant="primary"
          className="my-[32px]"
          cta="mailto:info@enactussfu.ca?subject=Partnership%20Enquiry"
        >
          Get In Contact With Us
        </Button>
      </div>
    </div >
  );
}

export default page;
