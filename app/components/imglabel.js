import React from "react";
import Button from "../components/button";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

// Full-width feature card: image beside the copy on large screens, stacked below that.
function imglabel({
  header,
  body,
  cta1,
  cta1link,
  cta2,
  cta2link,
  instagram,
  linkedin,
  img,
  imgAlt,
}) {
  return (
    <div className="bg-primary-gray flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] p-[24px] lg:p-[48px] w-full h-auto rounded-[16px]">
      <Image
        src={img}
        alt={imgAlt || header}
        width={1920}
        height={1080}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="w-full lg:w-[55%] h-auto lg:self-center rounded-[8px]"
        priority
      />
      <div className="flex flex-col gap-[24px] lg:gap-[32px] justify-center lg:w-[45%]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2>{header}</h2>
          <h3>{body}</h3>
        </div>

        {cta1 && (
          <div className="flex flex-row flex-wrap gap-[16px] md:gap-[24px]">
            <Button size="large" style="primary" cta={cta1link}>
              {cta1}
            </Button>
            {cta2 && cta2link && (
              <Button size="large" style="primary" cta={cta2link}>
                {cta2}
              </Button>
            )}
          </div>
        )}

        {(instagram || linkedin) && (
          <div className="flex flex-row gap-[24px]">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${header} on Instagram`}>
                <FaInstagram size={35} className="text-white" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${header} on LinkedIn`}>
                <FaLinkedin size={35} className="text-white" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default imglabel;
