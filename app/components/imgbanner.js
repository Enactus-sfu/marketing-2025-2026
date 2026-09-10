import React from "react";
import Button from "../components/button";
import { FaExternalLinkAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { linkedinFor } from "../data/team";

// A project manager's name. Links to their LinkedIn profile when the Team
// roster has one, with a hover state so the link is discoverable.
function ProjectManager({ name }) {
  const url = linkedinFor(name);
  if (!url) {
    return <h3 className="opacity-[60%]">{name}</h3>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="group inline-flex items-center gap-[8px] w-fit"
    >
      <h3 className="opacity-[60%] group-hover:opacity-100 group-hover:text-primary-yellow underline decoration-transparent group-hover:decoration-current underline-offset-4 transition duration-200">
        {name}
      </h3>
      <FaLinkedin
        size={16}
        className="text-primary-yellow opacity-0 group-hover:opacity-100 transition duration-200"
      />
    </a>
  );
}

function imgbanner({ header, body, instagram, linkedin, img, pm1, pm2, website, imgAlt, priority = false }) {
  const managers = [pm1, pm2].filter(Boolean);

  return (
    <div className="flex flex-col gap-[36px]">
      <div className="w-full h-[300px] md:h-[450px] lg:h-[600px] relative overflow-hidden">
        <Image
          src={img}
          alt={imgAlt || `${header} project banner`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <div className="flex flex-col gap-[12px] md:gap-[48px] justify-between h-full ">
        <div className="flex flex-col gap-[16px] h-[100%] w-full ">
          <div className='flex flex-col md:flex-row gap-[32px] md:gap-[64px]'>
            <div className="flex flex-col gap-[16px] justify-between">
              <h2 className="text-primary-yellow">{header}</h2>
              <h3>{body}</h3>
            </div>
            {managers.length > 0 && (
              <div className="flex flex-col gap-[8px] min-w-[25%]">
                <h2 className="mb-2">
                  {managers.length > 1 ? "Project Managers" : "Project Manager"}
                </h2>
                {managers.map((name) => (
                  <ProjectManager key={name} name={name} />
                ))}
                {website && (
                  <div className="h-full flex flex-col justify-end w-full items-start mt-[1rem]">
                    <Button cta={website} target="_blank" size="small" style="primary">
                      <div className='flex flex-row gap-[0.5rem] w-full items-center'>
                        <FaExternalLinkAlt />
                        <h3>View {header}’s Website</h3>
                      </div>
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {
          //checks if instagram and linkedin links are available, otherwise removes them.
          instagram || linkedin ? (
            <div className="flex flex-row gap-[24px]">
              {/* Instagram CTA */}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${header} on Instagram`}>
                  <FaInstagram size={35} className="text-white" />
                </a>
              )}

              {/* LinkedIn CTA */}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${header} on LinkedIn`}>
                  <FaLinkedin size={35} className="text-white" />
                </a>
              )}
            </div>
          ) : (
            ""
          )
        }
      </div>
    </div >
  );
}

export default imgbanner;
