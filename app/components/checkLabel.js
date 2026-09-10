import React from "react";

// Stat tile: a large number with a caption beneath it.
function checkLabel({ header, body }) {
  return (
    <div className="p-[16px] w-full min-[35rem]:w-[48%] min-[83rem]:w-[48.9%] lg:p-[24px] bg-primary-gray rounded-[8px] lg:rounded-[16px] flex flex-col gap-[8px] lg:gap-[12px]">
      <p className="text-primary-yellow text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-none tracking-[-0.02em]">
        {header}
      </p>
      <h3>{body}</h3>
    </div>
  );
}

export default checkLabel;
