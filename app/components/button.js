import React from "react";

function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  target,
  cta,
  ariaLabel,
}) {
  const baseClasses =
    "inline-flex items-center text-white hover:text-black hover:cursor-pointer ease-in-out duration-[300ms] focus:bg-red-600 w-fit font-dm-sans font-[600] text-[16px] leading-[1.4]";

  const variants = {
    primary: "bg-[#C70D00] hover:bg-primary-red",
    disabled: "bg-gray-200 text-gray-400",
    icon: "pr-[24px] bg-[#C70D00] hover:bg-primary-red",
  };

  const sizes = {
    small: "px-[16px] py-[10px] rounded-[10px]",
    large: "px-[16px] py-[16px] rounded-[16px]",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  // When a destination is supplied, render a single anchor styled as the button.
  // Nesting <button> inside <a> (or <a> inside <a>) is invalid HTML and browsers
  // silently restructure it, which broke these controls.
  if (cta) {
    const external = target === "_blank";
    return (
      <a
        href={cta}
        target={target}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

export default Button;
