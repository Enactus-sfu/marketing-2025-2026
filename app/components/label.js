import React from "react";

function label({ header, subheader, body }) {
  return (
    <div className="bg-primary-gray p-[48px] flex flex-col md:flex-row rounded-sm gap-[48px]">
      <div className="flex flex-col gap-[8px] min-w-[20%]">
        <h2 className="text-primary-yellow">{header}</h2>
        <h3 className="text-primary-yellow flex flex-nowrap w-fit">
          {subheader}
        </h3>
      </div>
      <h3>{body}</h3>
    </div>
  );
}

export default label;
