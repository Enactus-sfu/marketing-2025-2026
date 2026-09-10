import React from "react";

// Page title block. `center` sets it as a centered band; body copy that follows
// stays left-aligned, which is why the centered variant is capped in width.
function header({ header, body, center = false }) {
  return (
    <div
      className={`flex flex-col gap-[16px] w-full mb-[16px] ${
        center ? "items-center text-center mx-auto lg:max-w-[70%]" : "lg:max-w-[80%]"
      }`}
    >
      <h1>{header}</h1>
      {body && <h2 className="text-primary-yellow">{body}</h2>}
    </div>
  );
}

export default header;
