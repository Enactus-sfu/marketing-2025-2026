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

    return (
        <div className='flex flex-col'>
            <div className=' h-[76px]'></div>
            <div className="flex flex-row justify-between lg:items-center  fixed top-0 left-0 z-[100] items-start align-top w-[100%] bg-black text-white px-8 lg:py-[12px] py-[32px]  h-fit">
                <div
                    className={`flex lg:flex-row flex-col w-full transition-all
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
                        className={`w-full flex  lg:justify-center transition-all ease-in-out duration-[300ms]
                    ${open === true
                                ? "lg:h-full lg:max-h-full lg:opacity-[100%] max-h-[0] opacity-0"
                                : "max-h-[40vh] opacity-[100%]"
                            }`}
                    >
                        <nav className="flex items-start lg:flex-row flex-col lg:items-center gap-6">
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
                        </nav>
                    </div>
                </div>
                <div className="justify-end flex-row  h-fit w-[45%]">
                    <div className="hidden w-full lg:flex flex-row justify-end">
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
                    <div className="lg:hidden flex flex-row justify-end">
                        <button onClick={() => setOpen(!open)}>
                            <MdDensitySmall className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>    </div>
    );
}

export default Navbar;
