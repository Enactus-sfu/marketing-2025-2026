import React from "react";

function connectCard({ icon, name, cta = "Events", ctaLink, target = "_blank" }) {
  return (
    <div className="flex flex-row items-center gap-[16px] w-full bg-primary-gray rounded-[16px] p-[12px] md:p-[16px]">
      <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] rounded-[12px] bg-white/5 border border-white/10 text-primary-yellow">
        {icon}
      </div>

      <h4 className="grow font-[600] leading-[1.5]">{name ?? "Service"}</h4>

      <a href={ctaLink} target={target} rel="noopener noreferrer">
        <button
          type="button"
          className="w-fit px-[16px] py-[10px] rounded-[10px] bg-white/10 hover:bg-white/20 hover:cursor-pointer text-white font-dm-sans font-[600] text-[16px] leading-[1.4] ease-in-out duration-[300ms]"
        >
          {cta}
        </button>
      </a>
    </div>
  );
}

export default connectCard;
