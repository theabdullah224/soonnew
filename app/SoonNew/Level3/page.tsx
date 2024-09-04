"use client"
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import SoonNavbar from '../components/SoonNavbar'
import SoonFooter from '../components/SoonFooter'
import LevelsHeading from '../components/LevelsHeading'
import Image from 'next/image'
import stars from "../../../public/assets/comingsoon/stars2.png"
import '../styles/level.css'
const page = () => {
  return (
    <div className=' bg2 overflow-hidden relative z-10' >
      <SoonNavbar/>
      <AnimatePresence  mode="wait">
      <motion.div
        initial={{ x:"100vw" , scale:2  }}
        animate={{ x:0,scale:1 }}
        exit={{ x:"-100vw", scale:0 }}
        transition={{ duration: 1 }}
        
        className='absolute h-[100vh] z-[-10] ' >
            <Image src={stars} alt=''  />
        </motion.div>

      <motion.div 
        initial={{ x:"100vw" , scale:0  }}
        animate={{ x:0,scale:1 }}
        exit={{ x:"-100vw", scale:0 }}
        transition={{duration: 1 }}
      className=' flex flex-col  items-center justify-center w-[70%] mx-auto min-h-[650px] xl:min-h-[350px] py-20 xl:w-[80%] lg:w-[85%] mb:w-[95%] lg:py-12 mb:py-8' >
        <LevelsHeading headingText='Join the eTutor4Me Adventure!' headingClassName="text-[5rem]" paragraphClassName='!text-[2rem]  leading-tight' paragraphText='We are on a mission to make tutoring as thrilling as a rollercoaster ride—minus the long lines! Keep your eyes peeled and get ready to hop on board as one of our eTutors.' />
        <div className='pt-20' >
        <LevelsHeading headingText='Be First in Line and Get Free eTokis!' headingClassName='!font-semibold'  paragraphClassName='!text-[2rem] leading-tight ' paragraphText={`Sign up now and snag your first 15 eTokis for free! These tokens will be your fast-track to leveling up as an eTutor. Whether you're teaching algebra or diving into computer science, those eTokis will supercharge your progress. Join eTutor4Me today and kickstart your tutoring adventure!`}  />
        </div>
      

      </motion.div>
      </AnimatePresence>
      <SoonFooter/>
    </div>
  )
}

export default page
