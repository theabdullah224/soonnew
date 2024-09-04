'use client'
import React from 'react';

interface LevelsHeadingProps {
  headingClassName?: string;
  paragraphClassName?: string;
  headingText?: string;
  paragraphText?: string;
}

const LevelsHeading =({headingClassName,paragraphClassName,headingText,paragraphText})=> {
  return (
    <div className='text-center' >
    <h2 className={`${headingClassName} tracking-wider font-bold font-roboto_medium text-[70px] xl:text-[50px] lg:text-[40px]  text-white tb:text-[35px] mb:text-4xl`}>
      {headingText}
    </h2>
    <p className={`${paragraphClassName} text-[#A09EA7]  font-roboto_medium leading-none text-[40px] xl:!mt-4 xl:!text-[22px] lg:!text-[20px] font-medium mt-11 tb:!text-2xl mb:!text-[18px]`}>
      {paragraphText}
    </p>
  </div>
  );
}

export default LevelsHeading;
