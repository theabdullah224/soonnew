'use client'
import React from 'react'
import Image from 'next/image'
import "./hoverClasses.css"
// Import icon images
import tiktok from "../../../public/assets/comingsoon/tiktok.svg"
import instagram from "../../../public/assets/comingsoon/instagram.svg"
import twitter from "../../../public/assets/comingsoon/twitter.svg"
import youtube from "../../../public/assets/comingsoon/youtuve.svg"
import facebook from "../../../public/assets/comingsoon/facebook.svg"

// Array of icons
const icons = [
  tiktok,
  instagram,
  twitter,
  youtube,
  facebook
];
const FooterTwo = () => {
  return (
    <footer className=''>
      <div>
        <div className='flex justify-center items-center gap-3 pt-10 mb:flex-col mb:pt-12 lg:pt-2 tb:flex-row'>
          <div className='bg-[#FFF] h-9 input cursor-pointer flex items-center justify-center rounded-full px-10 py-3 w-[19rem] lg:w-[14rem] text-darkBlue text-sm'>
            <input type="text" className='bg-transparent cursor-pointer border-none w-full placeholder:text-[#AD9DCF] focus:outline-none' placeholder='Email Address' />
          </div>
          <div className='w-36 nofify h-9 lg:w-24 lg:text-xs flex items-center justify-center cursor-pointer rounded-full text-sm font-bold text-white bg-[#8653FF] '>
            Notify me
          </div>
        </div>
        <div className='flex justify-center gap-9 py-8 mb:gap-8 lg:py-4 lg:gap-6'>
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center'>
              <Image
                src={icon}


                alt={`Icon ${index + 1}`}
                className='cursor-pointer icons hover:scale-125 w-7 h-7 ease-in-out duration-300  lg:w-5 lg:h-5  '
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterTwo
