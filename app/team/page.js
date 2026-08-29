import React from 'react'
import Leadership from "../components/leadership"
import Header from "../components/header"

function page() {
    const leadershipList = [
        { name: "Wilson Liang", position: "President", img: "/images/leadership/naia.jpg", linkedin: "https://www.linkedin.com/in/naia-wong/" },
        { name: "Juliana Manalo", position: "Co-VP Ops", img: "/images/leadership/marianne.jpg", linkedin: "https://www.linkedin.com/in/marianne-li1311/" },
        { name: "Steven Learmonth", position: "Co-VP Ops", img: "/images/leadership/wilson.jpg", linkedin: "https://www.linkedin.com/in/wilson-liang1/" },
        { name: "Liam Santos", position: "Co-VP Strategy", img: "/images/leadership/hussain.jpg", linkedin: "https://www.linkedin.com/in/hussainaqvi/" },
        { name: "Marianne Li", position: "Co-VP Strategy", img: "/images/leadership/liam.jpg", linkedin: "https://www.linkedin.com/in/liam-santoss/" },
        { name: "Stephanie Mok", position: "Co-VP Marketing", img: "/images/leadership/chloe.jpg", linkedin: "https://www.linkedin.com/in/chloelu02/" },
        { name: "Adrian Lai", position: "Co-VP Marketing", img: "/images/leadership/faith.jpg", linkedin: "https://www.linkedin.com/in/faith-leung-/" },
        { name: "Michelle Lee", position: "Co-VP Inno", img: "/images/leadership/michelle-so.jpg", linkedin: "https://www.linkedin.com/in/michelle-so-221680295/" },
        { name: "Scott Higgins", position: "Co-VP Inno", img: "/images/leadership/winnie.jpg", linkedin: "https://www.linkedin.com/in/winniiewg/" },
        { name: "Anthea Deng", position: "Director Interal", img: "/images/leadership/patty.jpg", linkedin: "https://www.linkedin.com/in/patty-rattanaleelart/" },
        { name: "Faith Leung", position: "Director of Finance", img: "/images/leadership/steven.jpg", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Nikita Venkatachellum", position: "Co-Director of Media", img: "/images/leadership/anthea.jpg", linkedin: "https://www.linkedin.com/in/antheadeng/" },
        { name: "Patty Rattanaleelart", position: "Co-Director of Media", img: "/images/leadership/kaden.jpg", linkedin: "https://www.linkedin.com/in/kaden-fong/" },
        { name: "Winnie Wang", position: "Director of Marketing Strategy", img: "/images/leadership/clarissa.jpg", linkedin: "https://www.linkedin.com/in/clarissa-maloco-0053aa33a/" },
        { name: "Michelle So", position: "Co-Director of Design", img: "/images/leadership/michelle-lee.jpg", linkedin: "https://www.linkedin.com/in/michelle-lee-5025ab220/" },
        { name: "Kaden Fong", position: "Co-Director of Design", img: "/images/leadership/rebecca.jpg", linkedin: "https://www.linkedin.com/in/rebecca-yeung-/" },
        { name: "Hussain Naqvi", position: "Co-Director of Design", img: "/images/leadership/steph.jpg", linkedin: "https://www.linkedin.com/in/stephanie-mok7/" },
        { name: "Clarissa Maloco", position: "Co-Director of Events", img: "/images/leadership/juliana.jpg", linkedin: "https://www.linkedin.com/in/julianamanalo/" },
        { name: "Chloe Lu", position: "Co-Director of Events", img: "/images/leadership/scott.jpg", linkedin: "https://www.linkedin.com/in/scotthiggins02/" },
        { name: "Rebecca Yeung", position: "Co-Director of External", img: "/images/leadership/adrian.jpg", linkedin: "https://www.linkedin.com/in/adrian-lai-172017292/" },
        { name: "Caleb Wu", position: "Co-Director of External", img: "/images/leadership/nikita.jpg", linkedin: "#" },
        { name: "Naia Wong", position: "Director of Web & Tech", img: "/images/leadership/caleb.jpg", linkedin: "https://www.linkedin.com/in/caleb-wu-/" },
    ]
    const projectList = [
        // Project Operations
        { name: "Ruchi Sharma", position: "Co-PM of Alara", img: "/images/leadership/ruchi.jpg", linkedin: "https://www.linkedin.com/in/ruchisharmaa/" },
        { name: "Joshua Li", position: "Co-PM of Alara", img: "/images/leadership/joshua.jpg", linkedin: "https://www.linkedin.com/in/jjoshuali2/" },
        { name: "Anthony Perera", position: "PM of Nourish", img: "/images/leadership/anthony.jpg", linkedin: "https://www.linkedin.com/in/anthonyjperera/" },
        { name: "Justin Cheung", position: "Co-PM of Second Savour", img: "/images/leadership/justin.jpg", linkedin: "https://www.linkedin.com/in/justinacheung/" },
        { name: "Arianna Ha", position: "Co-PM of Second Savour", img: "/images/leadership/arianna.jpg", linkedin: "https://www.linkedin.com/in/arianna-ha/" },
        { name: "Joaquin Ofreneo", position: "Co-PM of NextSpark", img: "/images/leadership/joaquin.jpg", linkedin: "https://www.linkedin.com/in/joaquin-ofreneo-846162285/" },
        { name: "Ryan Liang", position: "Co-PM of NextSpark", img: "/images/leadership/ryan.jpg", linkedin: "https://www.linkedin.com/in/ryanliang2244/" },
        { name: "Siya Madaan", position: "PM of Unify", img: "/images/leadership/siya.jpg", linkedin: "https://www.linkedin.com/in/shrianshamadaan/" },
        { name: "Avneet Khangura", position: "Co-PM of SKYES", img: "/images/leadership/avneet.jpg", linkedin: "https://www.linkedin.com/in/avneet-kaur-khangura/" },
        { name: "Akshaj Shrestha", position: "Co-PM of SKYES", img: "/images/leadership/akshaj.jpg", linkedin: "https://www.linkedin.com/in/akshajshrestha/" },
        { name: "Valeria Lozada", position: "PM of Renovo", img: "/images/leadership/valeria.jpg", linkedin: "https://www.linkedin.com/in/valeria-lozada-108150315/" },
    ];
    return (
        <div className='flex flex-col gap-[48px] gutter'>
            <Header header="Our Leadership Team" body="Core Operations" />
            <div className='flex flex-wrap gap-[24px] justify-start flex-row'>
                {leadershipList.map((person) => (
                    <Leadership
                        name={person.name}
                        position={person.position}
                        img={person.img}
                        key={person.name}
                        linkedin={person.linkedin}
                    ></Leadership>
                ))}
            </div>
            <h2 className='text-primary-yellow mt-[2rem]'> Project Operations </h2>
            <div className='flex flex-wrap gap-[24px] justify-start flex-row'>
                {projectList.map((person) => (
                    <Leadership
                        name={person.name}
                        position={person.position}
                        img={person.img}
                        key={person.name}
                        linkedin={person.linkedin}
                    ></Leadership>
                ))}
            </div>
        </div >

    )
}

export default page