import React from 'react'
import Leadership from "../components/leadership"
import Header from "../components/header"
import { leadershipList, projectList } from "../data/team"

export const metadata = {
  title: "Our Team",
  description:
    "Meet the students leading Enactus SFU — our core operations team and the project managers behind each of our social enterprises.",
};

function page() {
    return (
        <div className='flex flex-col gap-[48px] gutter'>
            <Header center header="Our Leadership Team" body="Core Operations" />
            <div className='flex flex-wrap gap-[24px] justify-center flex-row'>
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
            <h2 className='text-primary-yellow mt-[2rem] text-center'> Project Operations </h2>
            <div className='flex flex-wrap gap-[24px] justify-center flex-row'>
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
        </div>
    )
}

export default page
