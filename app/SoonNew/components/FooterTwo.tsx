'use client'
import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import "./hoverClasses.css"
// Import icon images
import tiktok from "../../../public/assets/comingsoon/tiktok.svg"
import instagram from "../../../public/assets/comingsoon/instagram.svg"
import twitter from "../../../public/assets/comingsoon/twitter.svg"
import youtube from "../../../public/assets/comingsoon/youtuve.svg"
import facebook from "../../../public/fbicon.svg"
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// Array of icons
onst icons = [
  { src: tiktok, link: "https://www.tiktok.com/@etutor4me?_t=8pOCquOdGZV&_r=1" },
  { src: instagram, link: "https://www.instagram.com/etutor4me?igsh=MTBtaThtdm1nMTQzdQ%3D%3D&utm_source=qr" },
  { src: twitter, link: "#" },  // Add actual link here
  { src: youtube, link: "#" },  // Add actual link here
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
    initial={{ opacity:0 }}
    animate={{ opacity:1}}
    exit={{ opacity:0 }}
    transition={{ duration: 3 }}
    className=' pb-4'>
      <div>
        <div className='flex justify-center  items-center gap-4 mb-3    tb:flex-row bg-transparent'>
          <div className='bg-[#FFF]  input cursor-pointer flex items-center justify-center rounded-full px-10 py-3 w-[12rem] sm-default:w-[19rem] lg:w-[14rem] text-darkBlue text-sm'>
            <input
             value={email}
            onChange={(e) => setEmail(e.target.value)}
             type="email" className='bg-transparent  placeholder:font-bold cursor-pointer border-none w-full placeholder:text-[#AD9DCF] focus:outline-none' placeholder='Email Address' />
          </div>
          <div
          onClick={handleSubmit}
           className='px-4 sm-default:px-9 nofify py-3 lg:w-24 lg:text-xs flex items-center justify-center cursor-pointer rounded-full text-sm font-bold text-white bg-[#8653FF] '>
            {message}
          </div>
        </div>
        <div className='flex justify-center gap-9 py-4 mb:gap-8 lg:py-4 lg:gap-6'>
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center'>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon.src}
                  alt={`Icon ${index + 1}`}
                  className='cursor-pointer icons hover:scale-125 w-7 h-7 ease-in-out duration-300 lg:w-5 lg:h-5'
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
