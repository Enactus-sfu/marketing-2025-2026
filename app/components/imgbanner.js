import React from "react";
import Button from "../components/button";
import { FaExternalLinkAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


function imgbanner({ header, body, cta1, cta2, instagram, linkedin, img, pm1, pm2, pm1contact, pm2contact, website, imgAlt, priority = false }) {
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
              <h2>{header}</h2>
              <h3>{body}</h3>
            </div>
            {(pm1 || pm2) && (
              <div className="flex flex-col gap-[8px] min-w-[25%]">
                <h2 className="mb-2">Project Managers</h2>
                {pm1 && (
                  <div className="flex-row flex gap-[8px] justify-between">
                    <h3 className='opacity-[60%]'> {pm1} </h3>
                    <h3 className='opacity-[60%]'> {pm1contact} </h3>
                  </div>
                )}
                {pm2 && (
                  <div className="flex-row flex gap-[8px] justify-between">
                    <h3 className='opacity-[60%]'> {pm2} </h3>
                    <h3 className='opacity-[60%]'>{pm2contact} </h3>
                  </div>
                )}
                <div className="h-full flex flex-col justify-end w-full items-start mt-[1rem]">
                  {website && (

                    <Button cta={website} size="small" style="primary">
                      <div className='flex flex-row gap-[0.5rem] w-full items-center'><FaExternalLinkAlt /><h3>Website </h3></div>
                    </Button>
                    // <a href={website} target="_blank" className='hover:cursor-pointer hover:underline'> <div className='flex flex-row-reverse gap-[0.5rem] w-full items-center'><FaExternalLinkAlt /><h3>Website </h3></div></a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {cta1 ?

          cta2 == null ? (
            <div className="flex flex-row gap-[24px]">
              <Button size="large" style="primary">
                {cta1}
              </Button>
            </div>
          ) : (
            <div className="flex flex-row gap-[24px]">
              <Button size="large" style="primary">
                {cta1}
              </Button>
              <Button size="large" style="primary">
                {cta2}
              </Button>
            </div>
          )
          :
          ""
        }

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
