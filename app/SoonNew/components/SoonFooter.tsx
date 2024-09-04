'use client'
import React, { useState } from 'react';
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

const SoonFooter = () => {
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState(''); 
  const [value, setvalue] = useState("Notify me")
  const handleNotifyClick = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Email saved successfully!');
        setvalue("Done")
        setTimeout(() => {
          setvalue("Notify me")
        }, 3000);
       
        console.log("done")
        setEmail(''); // Clear the email input
      } else {
        setMessage(result.message || 'Error saving email.');
      }
    } catch (error) {
      setMessage('Failed to connect to the server.');
    }
  };
  return (
    <footer className='" bottom-0 left-1/2  w-full  text-center'>
      <div>
        <div className='flex justify-center font-roboto items-center gap-6 pt-10 mb:flex-col lg:pt-5 mb:pt-12 xl:gap-4 tb:flex-row'>
          <div className='bg-[#FFF] h-14 input cursor-pointer flex items-center justify-center rounded-full px-10  w-[28rem] text-darkBlue text-[22px] font-medium xl:w-[20rem] xl:text-sm xl:h-10 lg:h-10 lg:text-sm lg:w-[18rem]  mb:max-w-72 mb:text-sm mb:h-9'>
            <input 
             placeholder='Email Address'
             value={email}
             onChange={(e) => setEmail(e.target.value)} // Update email state on input change
             type="text" className='bg-transparent placeholder:text-[22px]  placeholder:mb:text-sm xl:placeholder:text-sm lg:placeholder:text-sm font-roboto placeholder:font-medium  cursor-pointer border-none w-full placeholder:text-[#AD9DCF] focus:outline-none'  />
          </div>
          <div
           onClick={handleNotifyClick}
           className='w-[183px] nofify h-14 flex items-center justify-center cursor-pointer rounded-full text-[22px] font-semibold text-white bg-[#8653FF]   xl:h-10 xl:text-sm xl:w-[130px] mb:w-32 mb:h-9 lg:h-10 lg:w-[130px] lg:text-sm   mb:text-sm'>
            Notify me
          </div>
        </div>
        <div className='flex justify-center font-roboto gap-14 py-12 mb:gap-7 mb:py-7 xl:py-9  lg:gap-8 xl:gap-8 lg:py-4'>
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center'>
              <Image
                src={icon}

                alt={`Icon ${index + 1}`}
                className='cursor-pointer icons hover:scale-125 ease-in-out duration-300 xl:w-7 xl:h-7 lg:w-7 lg:h-7 mb:w-7 mb:h-7   '
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SoonFooter
