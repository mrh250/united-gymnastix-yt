import SectionDivider from '@/components/Helper/SectionDivider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-black flex justify-center flex-col py-10">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className='flex flex-col justify-center items-start'>
          <p className="text-sm sm:text-base md:text-xl font-bold text-yellow-400">
            One Team, One Family...
          </p>
          <h1 className="mx-auto xl:block">
            <Image
              src="/images/Text-Logo-yellow.png"
              alt="image"
              width={900}
              height={400}
            />
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia reprehenderit, sequi illo vel molestias asperiores harum quae aperiam autem rem! Necessitatibus ea, amet tempora voluptates qui quod sit deleniti aliquid.
          </p>
          {/* Ratings */}
          <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
            <div className="flex mt-6 sm:mt-0 items-center space-x-4">
              <Link href="https://g.co/kgs/JDJJ61L">
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div>
              <div className="flex mt-6 items-center space-x-2">
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-200 font-bold">
                  4.7
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base">
                Best Rated on Google!
              </p>
            </div>
            <div className="flex mt-6 sm:mt-0 items-center space-x-4">
              <Link href="https://www.linkedin.com/company/united-gymnastix">
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div>
              <div className="flex mt-6 items-center space-x-2">
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-200 font-bold">
                  4.9
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base">
                Best Rated on LinkedIn!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-screen hidden xl:block bg-contain mb-0 mt-16">
          <Image
            src="/images/rings-hands3.png"
            alt="image"
            fill={true}
          />
        </div>
        <div><SectionDivider /></div>
      </div>
    </div>
  )
}

export default Hero
