import React from "react";
import Image from "next/image";

function leadership({ img, name, position, linkedin, key }) {
  // Only render the overlay link when there is somewhere to go. A bare href="#"
  // (or an empty one) reads to a screen reader as an unnamed link to nowhere.
  const hasLink = Boolean(linkedin) && linkedin !== "#";

  return (
    <div
      className="flex flex-col items-center gap-[16px] flex-grow min-w-[24rem] lg:max-w-[30%] md:max-w-[30%] max-w-[45%]"
      key={key}
    >
      <div className="relative w-full">
        {hasLink && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}, ${position} — LinkedIn profile`}
            className="absolute inset-0 z-10"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#DD7600] to-[#C80D00] hover:opacity-[20%] opacity-[0] hover:cursor-pointer duration-300 transition-ease-in-out"></div>
          </a>
        )}
        <Image
          src={img}
          alt={`${name}, ${position}`}
          width={800}
          height={1200}
          sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 32vw"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-[-10px] text-center">
        <h3> {name} </h3>
        <p className="text-white opacity-[70%]">{position}</p>
      </div>
    </div>
  );
}

export default leadership;
