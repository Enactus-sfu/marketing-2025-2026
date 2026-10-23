'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function ImgCarousel({ Carousel = [] }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        if (Carousel.length === 0) return;
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Carousel.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        if (Carousel.length === 0) return;
        setCurrentIndex((prevIndex) =>
            prevIndex === Carousel.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div>
            {/* Progress Bar */}
            <div className='mb-4 px-[24px]'>
                <div className='flex flex-row gap-4'>
                    {Carousel.map((item, index) => (
                        <div key={index} className='flex flex-col gap-1 flex-1'>
                            <div className='text-white text-sm font-medium text-center'>
                                <h3>{item.name || ``}</h3>
                            </div>

                            <div
                                className={`w-full h-1 border transition-colors duration-300 ${index === currentIndex
                                    ? 'bg-primary-red border-primary-red'
                                    : 'bg-white border-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='relative w-full h-[80vh] overflow-hidden flex flex-col gap-[16px] '>

                {Carousel.length === 0 ? <div className='border-1 border-white w-full'></div> : ""}

                <div className='absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-black/50 to-transparent z-5'></div>
                <div className='absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-black/50 to-transparent z-5'></div>

                <div className='absolute inset-0 flex flex-row justify-between items-center z-10'>
                    <button
                        onClick={goToPrevious}
                        className='text-white mx-[24px]  hover:bg-primary-red hover:cursor-pointer ease-in-out duration-[300ms] px-[8px] py-[16px] bg-secondary-red rounded-[16px]'
                    >
                        <IoIosArrowBack className='text-4xl text-white' />
                    </button>
                    <button
                        onClick={goToNext}
                        className='text-white mx-[24px]  hover:bg-primary-red hover:cursor-pointer ease-in-out duration-[300ms] px-[8px] py-[16px] bg-secondary-red rounded-[16px] '
                    >
                        <IoIosArrowForward className='text-4xl text-white' />
                    </button>
                </div>

                <div
                    className='flex transition-transform duration-500 ease-in-out h-full'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Carousel.map((image, index) => (
                        <div key={index} className='w-full h-full flex-shrink-0'>
                            <Image
                                src={image.img}
                                alt={`Carousel image ${index + 1}`}
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImgCarousel