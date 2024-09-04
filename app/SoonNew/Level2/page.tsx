"use client"
import React from 'react';
import SoonNavbar from '../components/SoonNavbar';
import SoonFooter from '../components/SoonFooter';
import Image from 'next/image';
import img1 from '../../../public/assets/comingsoon/awardpic.svg';
import img2 from '../../../public/assets/comingsoon/earnmore.svg';
import img3 from '../../../public/assets/comingsoon/levelup.svg';
import img4 from '../../../public/assets/comingsoon/flexible.svg';
import {AnimatePresence, motion} from 'framer-motion'
import stars from "../../../public/assets/comingsoon/stars2.png"
import FooterTwo from '../components/FooterTwo';
const Data = [
  {
    id: 1,
    heading: 'Tutor',
    para: 'Start tutoring students with a fully automated system, providing engaging and effective lessons.',
    img: img1,
  },
  {
    id: 2,
    heading: 'Earn More',
    para: 'Enjoy continuous pay increases as you advance through the levels.',
    img: img2,
  },
  {
    id: 3,
    heading: 'Level Up',
    para: 'Increase your level based on tutoring success, activity, and community involvement.',
    img: img3,
  },
  {
    id: 4,
    heading: 'Flexible Work',
    para: 'Schedule sessions at your convenience and work from anywhere in the world.',
    img: img4,
  },
];

const Page = () => {
  return (
    <div className='relative bg2   z-10 overflow-hidden' >
      
      <SoonNavbar />
      <AnimatePresence  mode="wait">
      <motion.div
        initial={{ x:"100vw" , scale:2  }}
        animate={{ x:0,scale:1 }}
        exit={{ x:"-100vw", scale:0 }}
        transition={{ duration: 1 }}
       className='absolute  z-[-10]' >
        <Image alt='' src={stars} className='h-[100vh]' />
      </motion.div>
<motion.div 
 initial={{ x:"100vw" , scale:0  }}
 animate={{ x:0,scale:1 }}
 exit={{ x:"-100vw", scale:0 }}
 transition={{ duration: 1 }}
      className='w-[75%] mx-auto text-center   mb:w-[90%]'>
        <h2 className='max-w-[75rem] mt-20 text-6xl leading-tight xl:text-[40px] lg:text-3xl xl:mt-12 lg:mt-12 mb:text-2xl mb:mt-4 text-white font-roboto_medium font-bold mx-auto'>
          Look Forward To These Exciting Features <br /> with eTutor4Me!
        </h2>
        <div className='grid grid-cols-2 mb:grid-cols-1 place-items-center  justify-between gap-10 my-16 lg:mb-0 xl:mb-4 lg:my-10 xl:my-12 mb:my-5 mb:gap-3 mb:mb-0 mb-10 mb:justify-center'>
          {Data.map(({ id, heading, para, img }) => (
            <div key={id} className={`flex items-start w-[90%] xl:w-[90%]  gap-6 lg:gap-6 lg:w-full mb:gap-4 mb:w-[90%]`}>
              <div className='relative w-[100px] h-[85px]  rounded-2xl bg-white mr-6 lg:w-20 lg:h-16 mb:w-[70px] mb:h-[60px] '>
                <Image
                  src={img}
                  alt={heading}
                  className='absolute right-[-20px] bottom-[-10px] w-20 h-20 lg:h-16 lg:w-16'
                />
              </div>
              <div className='flex flex-col justify-start items-start w-[90%] '>
                <h3 className='text-5xl font-roboto_medium font-medium text-white  mb:text-2xl lg:text-2xl xl:text-3xl  mb-2'>{heading}</h3>
                <p className='text-[#A9AFAF] font-roboto_medium lg mb:text-xs  text-[27px] leading-tight max-w-lg text-start xl:text-lg  xl:leading-tight lg:text-xl '>{para}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      </AnimatePresence>
      {/* <SoonFooter /> */}
      <FooterTwo/>
    </div>
  );
};

export default Page;
