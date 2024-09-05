// "use client";
// import React, { useState,useRef } from 'react';
// import SoonNavbar from '../components/SoonNavbar';
// import SoonFooter from '../components/SoonFooter';
// import '../styles/level.css';
// import COpyicon from '../../../public/copyicon.svg';
// import tick from '../../../public/tickicon.svg';
// import Image from 'next/image';
// import {AnimatePresence, motion} from 'framer-motion'
// import stars from '../../../public/assets/comingsoon/stars1.png'



// const Page = () => {
//   const [icon, setIcon] = useState(COpyicon); 
//   const emailRef = useRef<HTMLDivElement | null>(null);
//   // const emailRef = useRef();

//   const handleCopy = () => {
//     if (emailRef.current) {
//       const emailText = emailRef.current.innerText; 
//       navigator.clipboard.writeText(emailText) 
//         .then(() => {
//           setIcon(tick); 
//           setTimeout(() => setIcon(COpyicon), 2000); 
//         })
//         .catch(err => console.error('Failed to copy text:', err));
//     } else {
//       console.error('emailRef.current is null');
//     }
//   };


//   return (
//     <div 
//    className='bg2 overflow-hidden relative z-10'>
      
//       <SoonNavbar />
//       <AnimatePresence  mode="wait">
//       <motion.div
//         initial={{ x: "100%", y: "150%", scale:3  }}
//         animate={{ x:0,y:0,scale:1 }}
//         exit={{ x:"-100vw", scale:0 }}
//         transition={{ duration: 1 }} 
    
//     className='absolute z-[-10]' >
//       <Image src={stars} alt='' />
//     </motion.div>
//       <motion.div 
//         initial={{ x: "100%", y: "150%", scale:.5 }}
//         animate={{ x: 0, y: 0,scale:1 }}
//         exit={{ x: "-100vw", y: "-100vh", overflow: "hidden" }}
//         transition={{ duration: 1 }}
//       className='mx-auto sm:px-5 h-[74vh] flex items-center justify-center flex-col lg:w-[70%] xl:w-[70%] tb:w-[80%]'>
//         {/* <Image src={stars} className='h-[100vh] w-[100vw] border-2 relative -z-10' alt="" /> */}
//         <h1 className='text-center font-roboto text-white mx-auto text-5xl max-w-[84rem] px-3 sm:px-0 mb:text-2xl  tb:text-3xl lg:text-3xl'>
//           If you have any additional questions or need further assistance, our support team is here to help! Feel free to reach out to us for any queries or concerns you might have. We are just a click away and ready to assist you!
//         </h1>
//         <div className='flex gap-2 relative group px-4'>
//           <h2 className='text-4xl py-8 text-white mb:text-xl font-roboto tb:text-2xl lg:text-2xl'>
//             Email Us: <span ref={emailRef} id='email-text' className='underline'>support@etutor4me.com</span>
//           </h2>
//           <Image
//             className='w-7 mb-4 cursor-pointer img'
//             src={icon}
//             alt="Copy Icon"
//             onClick={handleCopy} 
//           />
//           <div className='border-[1px] border-white h-fit absolute -right-28 py-1 px-2 rounded-md hidden group-hover:block '>
//               <p className='text-sm text-white '>Copy to clipboard</p>
//           </div>
//         </div>
//       </motion.div>
//       </AnimatePresence>
//       <SoonFooter />
//     </div>
//   );
// }


// export default Page;