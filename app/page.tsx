/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect, useRef } from "react";
import React from 'react';
import Head from "next/head";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import line from "../public/line.svg";
import SoonFooter from "./SoonNew/components/SoonFooter";
import stars from "../public/level 0 stars.png";
import img1 from "../public/assets/comingsoon/awardpic.svg";
import img2 from "../public/assets/comingsoon/earnmore.svg";
import img3 from "../public/assets/comingsoon/levelup.svg";
import img4 from "../public/assets/comingsoon/flexible.svg";
import tick from "../public/tickicon.svg";
import COpyicon from "../public/copyicon.svg";

import Image from "next/image";
import "./SoonNew/components/hoverClasses.css";
import Level1 from "./SoonNew/Level1/page";
import comingbg from "../public/assets/comingsoon/comingbg.png";
import LevelsHeading from "./SoonNew/components/LevelsHeading";
import FooterTwo from "./SoonNew/components/FooterTwo";
import { Song_Myung } from "next/font/google";
import Email from './SoonNew/components/Email'




export default function Home() {
  // const [currentPage, setCurrentPage] = useState<number>(0);
  const controls = useAnimation();
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getText = (index: number) => {
    if (currentPage === index) {
      return menuItems[index].text; // Show text for current page
    }
    if (selectedIndex !== null && selectedIndex === index) {
      return menuItems[selectedIndex].text; // Show text for selected item
    }
    if (hoveredIndex !== null && hoveredIndex === index) {
      return menuItems[hoveredIndex].text; // Show text on hover
    }
    return `Level ${menuItems[index].level}`; // Default level text
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextPage = async () => {
    await controls.start({ x: "-100vw", transition: { duration: 1 } });
    setCurrentPage((prev) => (prev + 1) % 5);
    await controls.start({ x: 0, transition: { duration: 1 } });
  };

  const prevPage = async () => {
    await controls.start({ x: "100vw", transition: { duration: 1 } });
    setCurrentPage((prev) => (prev - 1 + 5) % 5);
    await controls.start({ x: 0, transition: { duration: 1 } });
  };

  const getBackgroundImage = () => {
    switch (currentPage) {
      case 1:
        return "/assets/comingsoon/bg1.svg";
      case 2:
        return "/assets/comingsoon/bg2.svg";
      case 3:
        return "/assets/comingsoon/bg3.svg";
      case 4:
        return "/assets/comingsoon/bg4.svg";
      default:
        return "/assets/comingsoon/comingbg.png";
    }
  };
  const [icon, setIcon] = useState(COpyicon);
  const emailRef = useRef<HTMLSpanElement | null>(null); // Correctly use HTMLSpanElement for span ref

  const handleCopy = () => {
    if (emailRef.current) {
      const emailText = emailRef.current.innerText;
      navigator.clipboard.writeText(emailText)
        .then(() => {
          setIcon(tick);
          setTimeout(() => setIcon(COpyicon), 2000);
        })
        .catch(err => console.error('Failed to copy text:', err));
    } else {
      console.error('emailRef.current is null');
    }
  };
  const menuItems = [
    { level: 0, text: "Coming Soon" },
    { level: 1, text: "About Us" },
    { level: 2, text: "Features" },
    { level: 3, text: "Kickstart" },
    { level: 4, text: "Support" },
  ];
  const handleClick = (index: number) => {
    setCurrentPage(index);
    setHoveredIndex(null); // Reset hover state on click
  };

  const getHoverText = (index: number) => {
    const item = menuItems.find((menuItem) => menuItem.level === index);
    return item ? item.text : "";
  };
  const Data = [
    {
      id: 1,
      heading: "Tutor",
      para: "Start tutoring students with a fully automated system, providing engaging and effective lessons.",
      img: img1,
    },
    {
      id: 2,
      heading: "Earn More",
      para: "Enjoy continuous pay increases as you advance through the levels.",
      img: img2,
    },
    {
      id: 3,
      heading: "Level Up",
      para: "Increase your level based on tutoring success, activity, and community involvement.",
      img: img3,
    },
    {
      id: 4,
      heading: "Flexible Work",
      para: "Schedule sessions at your convenience and work from anywhere in the world.",
      img: img4,
    },
  ];
  
  return (
    <div
      className="flex flex-col w-screen h-screen   font-roboto text-white"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
<nav className="relative w-full py-6 container mx-auto max-w-[785px] lg:max-w-[650px] mb:max-w-[400px] border-white z-10">
  <div className="flex justify-center">
    <ul className="flex items-center  justify-around max-w-[970px] mb:px-0 w-full">
      
      {menuItems.map((item, index) => (
        <React.Fragment key={item.level}>
          <li
            className={`relative flex icons items-center  w-[5rem] font-roboto justify-center text-[16px] lg:text-[13px] font-semibold text-center mb:text-[9px]`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(index)}
          >
            <Link href="">
              <motion.p
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className={`text-white transition-transform duration-300 ease-in-out py-1 text-xs sm-default:text-sm ${
                  hoveredIndex === index || selectedIndex === index
                    ? "scale-110"
                    : ""
                }`}
              >
                {getText(index)}
              </motion.p>
            </Link>
          </li>
          {index < menuItems.length - 1 && (
            <Image src={line} alt="Separator" />
          )}
        </React.Fragment>
      ))}
    </ul>
  </div>
</nav>

      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence>
          {currentPage === 0 && (
            <div className="absolute  inset-0 flex items-center justify-center bg-cover bg-center">
              <motion.div
                initial={{ y: "100vh", scale: 4 }}
                animate={{ y: 0, scale: 0.8 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute  h-screen w-screen "
              >
                <Image
                  src={stars}
                  alt="stars"
                  className="w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
              <div className="h-[65vh]   mb:h-[60vh] pt-16 flex flex-col justify-between items-center xl:h-[60vh] xl:pt-0">
                <motion.h1
                  initial={{ y: "-40px", scale: 0.7, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[10rem] font-azonix text-white xl:text-[8rem] lg:text-[6rem] tb:text-[4rem] mb:text-[3rem] mb:text-center"
                >
                  COMING SOON
                </motion.h1>
                <motion.p
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-xl font-bold"
                >
                  Sign up to be the first to know when you <br /> can create
                  your account!
                </motion.p>
              </div>
            </div>
          )}

          {currentPage === 1 && (
            <motion.div
              key="slide2"
              initial={{ scale: 0, y: "30vh" }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1 }}
              className="container h-[70vh] xl:h-[60vh] mb:h-[60vh] lg:h-[60vh]  w-[83%] mb:w-[95%] mx-auto flex flex-col justify-center items-center my-auto"
              style={{
                backgroundImage: "url(/images/bg-unlock-potential.jpg)",
              }}
            >
              <motion.div
                initial={{ scale: 1, y: "50vh", opacity: 1 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 1, y: "-100vh", opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute h-screen w-screen "
              >
                <Image src={stars} alt="stars" />
              </motion.div>
              <motion.div
                initial={{ y: "40vh", scale: 0.4 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ x: "-100vw", scale: 0 }}
                transition={{ duration: 1 }}
                className="text-[#A09EA7] mt-6 lg-default:mt-28   text-[40px] xl:text-[27px] lg:text-[23px]    tb:text-2xl mb:text-[18px] text-center font-roboto_medium font-medium  max-w-[96rem]"
              >
                <LevelsHeading
                  headingClassName="mb:text-xl mb-8  leading-normal xl-default:text-6xl leading-relaxed"
                  headingText="Unlock Your Tutoring Potential with Us!"
                />

                <p className="mt-4 text-sm text-center xl-default:text-4xl  leading-relaxed font-roboto_medium">
                  At eTutor4Me, we’re all about connecting awesome tutors with
                  students eager to learn. Our platform is like the perfect
                  classroom—but you can teach in your pajamas if you want! We
                  make online tutoring flexible, fun, and super effective.
                  Whether you’re teaching math, science, or even High Valyrian
                  (okay, maybe not High Valyrian), we’ve got the tools and
                  support you need to shine. Set your own schedule, teach from
                  your favorite coffee shop, and help students from anywhere,
                  anytime.
                </p>
              </motion.div>
            </motion.div>
          )}

          {currentPage === 2 && (
            <>
              <motion.div
                initial={{ x: "100vw", scale: 0.4 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: "-100vw", scale: 0 }}
                transition={{ duration: 1 }}
                className="w-[75%] mx-auto text-center  2xl-default:mt-16    mb:w-[90%]"
              >
                <motion.div
                  initial={{ x: "100vw", scale: 0.4 }}
                  animate={{ x: 0, scale: 1 }}
                  exit={{ x: "-100vw", scale: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute  "
                >
                  <Image src={stars} alt="stars" />
                </motion.div>

                <h2 className="max-w-[75rem]  mt-20 text-6xl leading-tight xl:text-[35px] lg:text-2xl xl:mt-12 lg:mt-12 mb:text-2xl mb:mt-4 text-white font-roboto_medium font-bold mx-auto">
                  Look Forward To These Exciting Features <br /> with eTutor4Me!
                </h2>
                <div className="grid grid-cols-2 mb:grid-cols-1    max-h-[46vh] overflow-scroll sm-default:overflow-hidden  sm-default:max-h-full   place-items-center  justify-between gap-10 my-16 lg:mb-0 xl:mb-4 lg:my-10 xl:my-12 mb:my-5 mb:gap-7 mb:mb-0 mb-10 mb:justify-center">
                  {Data.map(({ id, heading, para, img }) => (
                    <div
                      key={id}
                      className={`flex items-start w-[90%] xl:w-[90%]  gap-6 lg:gap-6 lg:w-full mb:gap-0 mb:w-[90%]   `}
                    >
                      <div className="relative w-[100px] h-[85px]  rounded-2xl bg-white mr-6 mb:mr-3 lg:w-20 lg:h-16  border-red-700 mb:w-[55px] mb:h-[50px] ">
                        <Image
                          src={img}
                          alt={heading}
                          className="absolute right-[-20px] bottom-[-10px] w-20 h-20 lg:h-16 lg:w-16 mb:w-10 mb:h-10 mb:right-[-5px] mb:bottom-[-5px]"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start w-[90%] ">
                        <h3 className="text-5xl font-roboto_medium font-medium text-white    mb:text-base lg:text-2xl xl:text-3xl  mb-2">
                          {heading}
                        </h3>
                        <p className="text-[#A9AFAF] font-roboto_medium lg mb:text-xs  text-[27px] leading-tight max-w-lg text-start xl:text-lg  xl:leading-tight lg:text-xl ">
                          {para}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {currentPage === 3 && (
            <motion.div
              key="slide4"
              initial={{ x: "100vw", scale: 0.4 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: "-100vw", scale: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: "url(/images/bg-adventure.jpg)" }}
            >
              <div className="absolute h-[100vh]  ">
                <Image src={stars} alt="" />
              </div>
              <div className=" flex flex-col sm-default:mt-28   items-center justify-center w-[70%] mx-auto min-h-[650px] xl:min-h-[350px] py-20 xl:w-[80%] lg:w-[85%] mb:w-[95%] lg:py-12 mb:py-8">
                <div className="flex flex-col items-center justify-center  mb-8">
                  <h1 className="sm-default:max-w-[75rem]  mt-20 xl-default:text-6xl xl-default:mb-4 text-center leading-tight xl:text-[35px] lg:text-2xl xl:mt-1 lg:mt-12 mb:text-2xl mb:mt-4 text-white font-roboto_medium font-bold ">
                    Join the eTutor4Me Adventure!
                  </h1>

                  <p className=" mb:mt-1 text-[#A09EA7]  font-roboto_medium  text-center max-w-[60rem] text-[40px] xl:!mt-4 xl:!text-[22px] lg:!text-[20px] font-medium mt-11 tb:!text-2xl mb:!text-[18px] ">
                    We are on a mission to make tutoring as thrilling as a
                    rollercoaster ride—minus the long lines! Keep your eyes
                    peeled and get ready to hop on board as one of our eTutors."
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h1 className="sm-default:max-w-[75rem] text-center xl-default:mb-4 mt-20 xl-default:text-6xl leading-tight xl:text-[35px] lg:text-2xl xl:mt-1 lg:mt-12 mb:text-2xl mb:mt-4 text-white font-roboto_medium font-bold ">
                    Be First in Line and Get Free eTokis!
                  </h1>

                  <p className=" mb:mt-1 text-[#A09EA7]  font-roboto_medium  text-center max-w-[65rem] text-[40px] xl:!mt-4 xl:!text-[22px] lg:!text-[20px] font-medium mt-11 tb:!text-2xl mb:!text-[18px] ">
                    Sign up now and snag your first 15 eTokis for free! These
                    tokens will be your fast-track to leveling up as an eTutor.
                    Whether you're teaching algebra or diving into computer
                    science, those eTokis will supercharge your progress. Join
                    eTutor4Me today and kickstart your tutoring adventure!
                  </p>
                </div>
                <div className="pt-20 lg:pt-4 mb:pt-0"></div>
              </div>
            </motion.div>
          )}

          {currentPage === 4 && (
            <motion.div
              key="slide5"
              initial={{ x: "100%", y: "150%", scale: 0 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              exit={{ x: "100%", y: "150%", scale: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
            >
              <div className="absolute h-[100vh]  ">
                <Image src={stars} alt="" />
              </div>
              <motion.div
                initial={{ x: "100%", y: "150%", scale: 3 }}
                animate={{ x: 0, y: 0, scale: 1 }}
                exit={{ x: "-100vw", scale: 0 }}
                transition={{ duration: 1 }}
                className="absolute z-[-10]"
              >
                {/* <Image src={stars} alt="" /> */}
              </motion.div>
              <motion.div
                initial={{ x: "100%", y: "150%", scale: 0.5 }}
                animate={{ x: 0, y: 0, scale: 1 }}
                exit={{ x: "-100vw", y: "-100vh", overflow: "hidden" }}
                transition={{ duration: 1 }}
                className="mx-auto sm:px-5 h-[74vh] flex items-center justify-center flex-col lg:w-[70%] xl:w-[70%] tb:w-[80%]"
              >
                {/* <Image src={stars} className='h-[100vh] w-[100vw]  relative -z-10' alt="" /> */}
                <h1 className="text-center font-roboto text-white mx-auto text-5xl max-w-[84rem] px-3 sm:px-0 mb:text-2xl  tb:text-3xl lg:text-3xl">
                  If you have any additional questions or need further
                  assistance, our support team is here to help! Feel free to
                  reach out to us for any queries or concerns you might have. We
                  are just a click away and ready to assist you!
                </h1>
                  <Email/>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {currentPage === 1 || currentPage === 2 ?<SoonFooter/>:<FooterTwo/> }
      {/* <FooterTwo /> */}
    </div>
  );
}
