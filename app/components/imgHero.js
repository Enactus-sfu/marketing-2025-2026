"use client";
import React from "react";
import Image from "next/image";
import Button from "../components/button";

function imgHero({ img, header, subheader, cta1, cta2 }) {
  return (
    <div>
      <section className="flex justify-center relative lg:h-fit h-[40vh] min-h-[450px] min-[23rem]:min-h-[375px] ">
        <Image
          src={img}
          alt={`${header} banner image`}
          width={1920}
          height={800}
          className="object-cover"
          priority
          onError={(e) => console.error('Image failed to load:', img, e)}
        />

        {/* Absolutely positioned centered text with golden glow effect */}
        <div className="absolute inset-0 flex items-center flex-col justify-center gutter gap-[24px] h-full">
          <h1 className="w-full text-left">{header}</h1>
          <h2 className="text-primary-pink text-left w-full">{subheader}</h2>
          {cta1 && (
            cta2 == null ? (
              <div className="flex flex-row gap-[24px] justify-center">
                <Button size="large" style="primary" onClick={() => alert("This event is currently not available yet!")}>
                  {cta1}
                </Button>
              </div>
            ) : (
              <div className="flex flex-row gap-[24px] w-full justify-start">
                <Button size="large" style="primary">
                  {cta1}
                </Button>
                <Button size="large" style="primary">
                  {cta2}
                </Button>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default imgHero;
