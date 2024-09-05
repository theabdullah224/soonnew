'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import "./hoverClasses.css"
// Import icon images
import tiktok from "../../../public/assets/comingsoon/tiktok.svg"
import instagram from "../../../public/assets/comingsoon/instagram.svg"
import twitter from "../../../public/assets/comingsoon/twitter.svg"
import youtube from "../../../public/assets/comingsoon/youtuve.svg"
import facebook from "../../../public/fbicon.svg"
import { motion } from "framer-motion";

// Array of icons
const icons = [
  { src: tiktok, link: "https://www.tiktok.com/@etutor4me?_t=8pOCquOdGZV&_r=1" },
  { src: instagram, link: "https://www.instagram.com/etutor4me?igsh=MTBtaThtdm1nMTQzdQ%3D%3D&utm_source=qr" },
  { src: twitter, link: "https://x.com" },  // Add actual link here
  { src: youtube, link: "https://www.youtube.com" },  // Add actual link here
  { src: facebook, link: "https://www.facebook.com/profile.php?id=61564058677794" }
];

const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Notify me');

  const handleSubmit = async () => {
    if (!email) {
      // setMessage('');
      // console.log(message)
      return;
    }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Done!');
        setTimeout(() => {
          setMessage('Notify me');
          
        }, 2000);
        setEmail('');
      } else {
        setMessage(data.message || 'Try again');
      }
    } catch (error) {
      setMessage('Try again.');
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className='pb-4'
    >
      <div>
        <div className='flex justify-center items-center mb-3 gap-2 tb:flex-row bg-transparent'>
          <div className='bg-[#FFF] input cursor-pointer flex items-center justify-center rounded-full px-4 py-1 w-[12rem] sm-default:w-[14rem] text-darkBlue text-sm'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-transparent placeholder:font-bold placeholder:text-xs cursor-pointer border-none w-full placeholder:text-[#AD9DCF] focus:outline-none'
              placeholder='Email Address'
            />
          </div>
          <div
            onClick={handleSubmit}
            className='px-3 sm-default:px-5 nofify py-[6px] text-xs lg:w-24 lg:text-xs flex items-center justify-center cursor-pointer rounded-full font-bold text-white bg-[#8653FF]'
          >
           {message}
          </div>
        </div>
        
       <div className='flex justify-center gap-7 py-4 mb:gap-6 lg:py-4 lg:gap-4'>
  {icons.map((icon, index) => (
    <div key={index} className='flex items-center justify-center'>
      <a href={icon.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={icon.src}
          alt={`Icon ${index + 1}`}
          className='cursor-pointer icons hover:scale-125 w-5 h-5 ease-in-out duration-300 lg:w-4 lg:h-4'
        />
      </a>
    </div>
  ))}
</div>
      </div>
    </motion.footer>
  )
}

export default FooterTwo
