'use client'

import React from 'react'
import Icon from '@mdi/react'
import { mdiInstagram, mdiLinkedin, mdiEmailOutline } from '@mdi/js'
import Button from "../components/button"
import Link from 'next/link'
import Image from 'next/image'

const CONTACT_EMAIL = 'info@enactussfu.ca'

const linkClass = "transition ease-in-out duration-100 hover:underline hover:cursor-pointer"

function Footer() {
    const currentYear = new Date().getFullYear()

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL)
            window.alert(`Copied ${CONTACT_EMAIL} to clipboard`)
        } catch (err) {
            window.alert('Failed to copy')
        }
    }

    const columns = [
        {
            title: "Organization",
            items: [
                { name: "The Team", link: "/team" },
                { name: "About Us", link: "/about" },
                { name: "History", link: "/about#history" },
                { name: "Awards", link: "/competition" },
            ],
        },
        {
            title: "Projects",
            items: [
                { name: "Unify", link: "/projects#Unify" },
                { name: "SKYES", link: "/projects#SKYES" },
                { name: "Alara", link: "/projects#Alara" },
                { name: "Nourish", link: "/projects#Nourish" },
                { name: "NextSpark", link: "/projects#NextSpark" },
                { name: "Renovo", link: "/projects#Renovo" },
                { name: "Second Savour", link: "/projects#SecondSavour" },
            ],
        },
        {
            title: "Current Events",
            items: [
                { name: "Forward Vision", link: "/forwardVision" },
            ],
        },
        {
            title: "Get Involved",
            items: [
                { name: "Join Our Team", link: "https://www.instagram.com/enactussfu/", external: true },
                { name: "Partner With Us", link: "/sponsor" },
                { name: "Contact Us", link: `mailto:${CONTACT_EMAIL}`, external: true },
            ],
        },
    ]

    return (
        <footer className="bg-[#121212] h-fit lg:mt-0 mt-[24px]">
            <div className="gutter pt-16 pb-10 h-fit">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 md:items-start md:justify-between w-full">

                    {/* Brand column: logo, blurb, newsletter, socials, legal */}
                    <div className="flex flex-col gap-[20px] max-w-full lg:max-w-[36%]">
                        <div className="flex items-end gap-[18px] w-fit h-auto">
                            <Image
                                src="/images/Logo.svg"
                                alt="Enactus SFU Logo"
                                width={200}
                                height={64}
                                className="w-[4vw] h-auto"
                            />
                            <div className="text-[3vw] text-[#FFD156] font-bold leading-[1.1] tracking-[-0.025em] whitespace-nowrap">
                                Enactus SFU
                            </div>
                        </div>
                        <p className="max-w-[538px] text-[14px] leading-relaxed text-[#D4D4D4]">
                            Enactus is a social entrepreneurship organization that focuses on creating projects that impact with a
                            focus of sustainability, economic empowerment, and growth.
                        </p>

                        <Button size='large' style='primary' target="_blank" cta="https://mailchi.mp/962e35d5baa4/enactus-sfu-mailchimp-sign-up">
                            Sign up for our Newsletter!
                        </Button>

                        <div className="flex items-center gap-6 pt-[8px]">
                            <a href="https://www.instagram.com/enactussfu/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                    <Icon path={mdiInstagram} size={1} className="text-white" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company/enactussfu/?originalSubdomain=ca" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                    <Icon path={mdiLinkedin} size={1} className="text-white" />
                                </div>
                            </a>
                            <button type="button" onClick={handleCopyEmail} aria-label={`Copy email address ${CONTACT_EMAIL}`} className="group">
                                <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                    <Icon path={mdiEmailOutline} size={1} className="text-white" />
                                </div>
                            </button>
                        </div>

                        <div className='flex flex-col h-fit'>
                            <div className="text-[16px] font-medium tracking-[-0.015em] text-[#737373]">
                                Copyright © Enactus {currentYear}. All rights reserved.
                            </div>
                            <div className="flex items-center gap-4 text-[16px] font-medium tracking-[-0.015em] text-[#F5F5F5]">
                                <a href="https://www.sfu.ca/communicators-toolkit/brand/guidelines/writing/editorial-style-guide/language-grammar/territorial-acknowledgements.html" target="_blank" rel="noopener noreferrer" className={linkClass}>Land Acknowledgment</a>
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-[12px] md:grid-cols-4 max-w-[100%] lg:max-w-[48%] w-full h-fit">
                        {columns.map((column) => (
                            <div key={column.title} className="space-y-4">
                                <div className="text-[14px] font-semibold tracking-[-0.025em] text-[#FFC220]">{column.title}</div>
                                <div className="space-y-4 text-[14px] text-[#D4D4D4] flex flex-col">
                                    {column.items.map((item) => (
                                        item.external ? (
                                            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link key={item.name} href={item.link} className={linkClass}>
                                                {item.name}
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
