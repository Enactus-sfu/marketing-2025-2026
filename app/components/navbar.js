"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { MdDensitySmall } from "react-icons/md";

function Navbar() {
    const navItems = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Team", link: "/team" },
        { label: "Projects", link: "/projects" },
        { label: "Events", link: "/events" },
        { label: "Our Partners", link: "/sponsor" },
        { label: "Competition", link: "/competition" },
    ];

    const [open, setOpen] = useState(true);
    const pathname = usePathname();
    // The Forward Vision assistant is a full-screen chat, so it keeps the compact (mobile)
    // navbar at every width: desktop-only `lg:` classes are dropped on that page.
    const compact = pathname === "/forward-vision";
    const lg = (classes) => (compact ? "" : classes);

    return (
        <div className='flex flex-col'>
            {/* Spacer under the fixed bar; the compact bar is 84px tall. */}
            <div className={compact ? "h-[84px]" : "h-[76px]"}></div>
            <div className={`flex flex-row justify-between ${lg("lg:items-center lg:py-[12px]")} fixed top-0 left-0 z-[100] items-start align-top w-[100%] bg-black text-white px-8 py-[32px] h-fit`}>
                <div
                    className={`flex ${lg("lg:flex-row")} flex-col w-full transition-all
                ${open === false ? "gap-[12px]" : "gap-[0px]"}`}
                >
                    <div className="w-full">
                        <Link href="/">
                            <Image
                                src="/images/Logo.svg"
                                alt="Enactus SFU Logo"
                                width={62}
                                height={64}
                                className="h-[20px] w-auto"
                            />
                        </Link>
                    </div>
                    <div
                        className={`w-full flex ${lg("lg:justify-center")} transition-all ease-in-out duration-[300ms]
                    ${open === true
                                ? `${lg("lg:h-full lg:max-h-full lg:opacity-[100%]")} max-h-[0] opacity-0 pointer-events-none ${lg("lg:pointer-events-auto")}`
                                : "max-h-[40vh] opacity-[100%]"
                            }`}
                    >
                        <nav className={`flex items-start ${lg("lg:flex-row lg:items-center")} flex-col gap-6`}>
                            {navItems.map((item) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.link}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`leading-none whitespace-nowrap transition-all text-[0.83rem] font-bold ${isActive
                                            ? "text-[#ED8B6E]"
                                            : "text-white opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/forward-vision"
                                aria-current={pathname === "/forward-vision" ? "page" : undefined}
                                className={`leading-none whitespace-nowrap text-[0.83rem] font-bold rounded-full border px-[12px] py-[7px] transition-colors ${pathname === "/forward-vision"
                                    ? "border-[#ED8B6E] text-[#ED8B6E]"
                                    : "border-white/30 text-white hover:border-[#ED8B6E] hover:text-[#ED8B6E]"
                                    }`}
                            >
                                Ask Forward Vision
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="justify-end flex-row  h-fit w-[45%]">
                    <div className={`hidden w-full ${lg("lg:flex")} flex-row justify-end`}>
                        <Button
                            size="small"
                            variant="icon"
                            cta="https://www.instagram.com/enactussfu/"
                            target="_blank"
                        >
                            <div className="flex flex-row gap-2 ">
                                <Icon path={mdiPlus} size={0.8} />
                                Join Our Team
                            </div>
                        </Button>
                    </div>
                    <div className={`${lg("lg:hidden")} flex flex-row justify-end`}>
                        <button onClick={() => setOpen(!open)}>
                            <MdDensitySmall className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>    </div>
    );
}

export default Navbar;
