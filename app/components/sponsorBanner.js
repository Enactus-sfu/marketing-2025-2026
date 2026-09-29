import React from "react";
import Image from "next/image";

function sponsorBanner({ img, sponsor, width, height }) {
  return (
    <div className="flex flex-col w-full md:w-[50%] gap-[1.6rem] justify-end items-center bg-primary-gray rounded-[16px] p-[1.6rem] text-primary-pink">
      <Image
        src={img}
        alt={sponsor}
        width={width}
        height={height}
        className="w-full h-auto rounded-[16px]"
      />

      <h3 className="text-primary-pink">{sponsor}</h3>
    </div>
  );
}

export default sponsorBanner;
