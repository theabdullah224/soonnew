"use client"
import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import SoonNavbar from '../components/SoonNavbar'
import SoonFooter from '../components/SoonFooter'
import stars from '../../../public/assets/comingsoon/stars1.png'
import Image from 'next/image'
import '../styles/level.css'
import LevelsHeading from '../components/LevelsHeading'
import FooterTwo from '../components/FooterTwo'
// import LevelsHeading from './LevelsHeading'
// interface Level1Props {
//   headingText: string;
// }
const Level1 = ()=>{
  return (
    <div
     className='relative bg2 !min-h-screen z-10' >
      <SoonNavbar/>
    <div className=' container h-[70vh] xl:h-[60vh] mb:h-[60vh] lg:h-[60vh]  w-[83%] mx-auto flex flex-col justify-center items-center my-auto' >
      {/* <LevelsHeading headingText='Unlock Your Tutoring Potential with Us!' /> */}

      <AnimatePresence  mode="wait">
      <motion.div
        initial={{ y:"100vh" ,   }}
        animate={{ y:0}}
        exit={{ x:"-100vw", scale:0 }}
        transition={{ duration: 1 }} 
      
      className='absolute z-[-10]' >
        <Image alt='' src={stars} />
      </motion.div>

<motion.div 
  initial={{ scale:0.4 }}
  animate={{ scale:1 }}
  exit={{ scale:0 }}
  transition={{  duration: 1 }}
       className='text-[#A09EA7] text-[40px] xl:text-[27px] lg:text-[23px]  mt-1 tb:text-2xl mb:text-[18px] text-center font-roboto_medium font-medium  max-w-[96rem]' >
        <LevelsHeading   headingText='Unlock Your Tutoring Potential with Us!' />
        <p className='-mt-4 leading-tight ' >
        At eTutor4Me, we’re all about connecting awesome tutors with students eager to learn. Our platform is like the perfect classroom—but you can teach in your pajamas if you want! We make online tutoring flexible, fun, and super
        </p>
        <p className='max-w-[90rem] leading-tight' >
        effective. Whether you’re teaching math, science, or even High Valyrian (okay, maybe not High Valyrian), we’ve got the tools and support you need to shine. Set your own schedule, teach from your favorite coffee shop, and help students from anywhere, anytime.
        </p>
    
      </motion.div>
      </AnimatePresence>
    </div>
    {/* <SoonFooter/> */}
    <FooterTwo/>
         </div>
  )
}

export default Level1
