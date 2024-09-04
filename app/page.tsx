  "use client"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import line from "../public/line.svg"
import SoonFooter from './SoonNew/components/SoonFooter';
import stars from "../public/assets/comingsoon/stars1.png"
import img1 from '../public/assets/comingsoon/awardpic.svg';
import img2 from '../public/assets/comingsoon/earnmore.svg';
import img3 from '../public/assets/comingsoon/levelup.svg';
import img4 from '../public/assets/comingsoon/flexible.svg';
import tick from '../public/tickicon.svg';
import COpyicon from '../public/copyicon.svg';

import Image from 'next/image';
import './SoonNew/components/hoverClasses.css'
import Level1 from './SoonNew/Level1/page';
import comingbg from '../public/assets/comingsoon/comingbg.png'
import LevelsHeading from './SoonNew/components/LevelsHeading';
import FooterTwo from './SoonNew/components/FooterTwo';
import { Song_Myung } from 'next/font/google';

export default function Home() {
  // const [currentPage, setCurrentPage] = useState<number>(0);
  const controls = useAnimation();
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  

  const getText = (index: number) => {
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
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextPage = async () => {
    await controls.start({ x: '-100vw', transition: { duration: 1 } });
    setCurrentPage((prev) => (prev + 1) % 5);
    await controls.start({ x: 0, transition: { duration: 1 } });
  };

  const prevPage = async () => {
    await controls.start({ x: '100vw', transition: { duration: 1 } });
    setCurrentPage((prev) => (prev - 1 + 5) % 5);
    await controls.start({ x: 0, transition: { duration: 1 } });
  };

  const getBackgroundImage = () => {
    switch (currentPage) {
      case 1:
        return '/assets/comingsoon/bg1.svg';
      case 2:
        return '/assets/comingsoon/bg2.svg';
      case 3:
        return '/assets/comingsoon/bg3.svg';
      case 4:
        return '/assets/comingsoon/bg4.svg';
      default:
        return '/assets/comingsoon/comingbg.png'
    }
  };
  const [icon, setIcon] = useState(COpyicon); 
  const emailRef = useRef<HTMLDivElement | null>(null);
  // const emailRef = useRef();

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
    { level: 0, text: 'Coming Soon' },
    { level: 1, text: 'About Us' },
    { level: 2, text: 'Features' },
    { level: 3, text: 'Kickstart' },
    { level: 4, text: 'Support' },
  ];
  

  const handleClick = (index: number) => {
    setCurrentPage(index);
    setHoveredIndex(null); // Reset hover state on click
  };

  const getHoverText = (index: number) => {
    const item = menuItems.find(menuItem => menuItem.level === index);
    return item ? item.text : '';
  };
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
 

  

    return (
      <div className="flex flex-col w-screen h-screen  font-sans text-white"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: 'cover',  
          backgroundPosition: 'center',
        }}
      >
        <Head>
          <title>eTutor4Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className='relative w-full py-11 container mx-auto h-16 max-w-[900px] xl:py-9 lg:py-8 z-10'>
      <div className='flex justify-center'>
        <ul className='flex items-center justify-between max-w-[970px] mb:px-4 w-full'>
          {menuItems.map((item, index) => (
            <li
              key={item.level}
              className={`relative flex icons items-center font-roboto justify-between text-[16px] lg:text-[13px] font-semibold ${index === menuItems.length - 1 ? 'w-auto' : 'w-[15%]'} text-center mb:text-[9px]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              <Link href=''>
                <p
                  className={`text-white transition-transform duration-300 ease-in-out mx-2 px-3 py-1 text-sm ${
                    hoveredIndex === index || selectedIndex === index ? 'scale-110' : ''
                  }`}
                >
                  {getText(index)}
                </p>
              </Link>
              {index < menuItems.length - 1 && (
                <Image src={line} alt="Separator" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>

        <main className="flex-grow relative overflow-hidden">
        <AnimatePresence initial={false} mode='wait'>
            {currentPage === 0 && (
              <motion.div
              key="slide1"
              initial={{ y: "-100vh", scale: 2, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ x: "-100vw", scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}
              
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
              
              >
                <div
        
       className='absolute ' >
      
        <Image src={stars} alt='stars' />
      </div>
                <div className="h-[65vh]   mb:h-[60vh] pt-16 flex flex-col justify-between items-center xl:h-[60vh] xl:pt-10">

                  <motion.h1 className="text-[10rem] font-azonix text-white xl:text-[7rem] lg:text-[6rem] tb:text-[4rem] mb:text-[3rem] mb:text-center">COMING SOON</motion.h1>
                  <p className='text-white text-3xl font-roboto  font-semibold text-center xl:text-[20px] lg:text-xl mb:px-4 mb:text-sm' >Sign up to be the first to know when you <br /> can create your account!</p>
                </div>
              </motion.div>
            )}

            {currentPage === 1 && (
              <motion.div
                key="slide2"
                initial={{ y: "100vh", scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: "-100vh", scale: 0 }}
                transition={{ duration: 1 }}
                className="container h-[70vh] xl:h-[60vh] mb:h-[60vh] lg:h-[60vh]  w-[83%] mb:w-[95%] mx-auto flex flex-col justify-center items-center my-auto"
                style={{ backgroundImage: 'url(/images/bg-unlock-potential.jpg)' }}
              >
                <div
        
        className='absolute  ' >
       
         <Image src={stars} alt='stars' />
       </div>
                <motion.div  
                
                initial={{ scale:0.4 }}
                animate={{ scale:1 }}
                exit={{ scale:0 }}
                transition={{  duration: 1 }}
                     className='text-[#A09EA7] text-[40px] xl:text-[27px] lg:text-[23px]  mt-1 tb:text-2xl mb:text-[18px] text-center font-roboto_medium font-medium  max-w-[96rem]' >
                      <LevelsHeading headingClassName='mb:text-xl'  headingText='Unlock Your Tutoring Potential with Us!' />

                      <p className='-mt-4 leading-tight ' >
                      At eTutor4Me, we’re all about connecting awesome tutors with students eager to learn. Our platform is like the perfect classroom—but you can teach in your pajamas if you want! We make online tutoring flexible, fun, and super
                      </p>
                      <p className='max-w-[90rem] leading-tight' >
                      effective. Whether you’re teaching math, science, or even High Valyrian (okay, maybe not High Valyrian), we’ve got the tools and support you need to shine. Set your own schedule, teach from your favorite coffee shop, and help students from anywhere, anytime.
                      </p>
                </motion.div>
              </motion.div>
            )}

            {currentPage === 2 && (
              <motion.div
                key="slide3"
                initial={{ x: "100vw", scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: "-100vw", scale: 0 }}
                transition={{ duration: 1 }}
                className='w-[75%] mx-auto text-center   mb:w-[90%]'>
                  <div
        
        className='absolute  ' >
       
         <Image src={stars} alt='stars' />
       </div>
                  
                <h2 className='max-w-[75rem] mt-20 text-6xl leading-tight xl:text-[35px] lg:text-2xl xl:mt-12 lg:mt-12 mb:text-2xl mb:mt-4 text-white font-roboto_medium font-bold mx-auto'>
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
            )}

            {currentPage === 3 && (
              <motion.div
                key="slide4"
                initial={{ x: "100vw", scale: 2 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: "-100vw", scale: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/bg-adventure.jpg)' }}
              >
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
        <LevelsHeading headingText='Join the eTutor4Me Adventure!' headingClassName="text-[5rem]" paragraphClassName='!text-[2rem]  leading-tight mb:mt-4' paragraphText='We are on a mission to make tutoring as thrilling as a rollercoaster ride—minus the long lines! Keep your eyes peeled and get ready to hop on board as one of our eTutors.' />
        <div className='pt-20 lg:pt-4 mb:pt-4' >
        <LevelsHeading headingText='Be First in Line and Get Free eTokis!' headingClassName='!font-semibold'  paragraphClassName='!text-[2rem] leading-tight mb:mt-4
        ' paragraphText={`Sign up now and snag your first 15 eTokis for free! These tokens will be your fast-track to leveling up as an eTutor. Whether you're teaching algebra or diving into computer science, those eTokis will supercharge your progress. Join eTutor4Me today and kickstart your tutoring adventure!`}  />
        </div>
      

      </motion.div>
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
                <div
        
        
        className='absolute h-[100vh] z-[100] ' >
            <Image src={stars} alt=''  />
        </div>
                <motion.div
        initial={{ x: "100%", y: "150%", scale:3  }}
        animate={{ x:0,y:0,scale:1 }}
        exit={{ x:"-100vw", scale:0 }}
        transition={{ duration: 1 }} 
    
    className='absolute z-[-10]' >
      <Image src={stars} alt='' />
    </motion.div>
    <motion.div 
        initial={{ x: "100%", y: "150%", scale:.5 }}
        animate={{ x: 0, y: 0,scale:1 }}
        exit={{ x: "-100vw", y: "-100vh", overflow: "hidden" }}
        transition={{ duration: 1 }}
      className='mx-auto sm:px-5 h-[74vh] flex items-center justify-center flex-col lg:w-[70%] xl:w-[70%] tb:w-[80%]'>
        {/* <Image src={stars} className='h-[100vh] w-[100vw] border-2 relative -z-10' alt="" /> */}
        <h1 className='text-center font-roboto text-white mx-auto text-5xl max-w-[84rem] px-3 sm:px-0 mb:text-2xl  tb:text-3xl lg:text-3xl'>
          If you have any additional questions or need further assistance, our support team is here to help! Feel free to reach out to us for any queries or concerns you might have. We are just a click away and ready to assist you!
        </h1>
        <div className='flex gap-2 relative group px-4'>
          <h2 className='text-4xl py-8 text-white mb:text-xl font-roboto tb:text-2xl lg:text-2xl'>
            Email Us: <span ref={emailRef} id='email-text' className='underline'>support@etutor4me.com</span>
          </h2>
          <Image
            className='w-7 mb-4 cursor-pointer img'
            src={icon}
            alt="Copy Icon"
            onClick={handleCopy} 
          />
          <div className='border-[1px] border-white h-fit absolute -right-28 py-1 px-2 rounded-md hidden group-hover:block '>
              <p className='text-sm text-white '>Copy to clipboard</p>
          </div>
        </div>
      </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        
        {/* {currentPage === 1 || currentPage === 2 ?<FooterTwo/>:<SoonFooter/> } */}
        <FooterTwo/>
      </div>
    );
  }
