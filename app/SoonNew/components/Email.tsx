import React, { useState, useRef } from 'react';
import Image from 'next/image';
import copyIcon from '../../../public/copyicon.svg';
import tickIcon from '../../../public/tickicon.svg';

const EmailCopyComponent = () => {
  const [icon, setIcon] = useState(copyIcon);
  const emailRef = useRef(null);

  const handleCopy = () => {
    if (emailRef.current) {
      const emailText = emailRef.current.innerText;
      navigator.clipboard.writeText(emailText)
        .then(() => {
          setIcon(tickIcon);
          setTimeout(() => setIcon(copyIcon), 2000);
        })
        .catch((err) => console.error("Failed to copy text:", err));
    }
  };

  return (
    <div className="flex items-center gap-2 relative group z-50">
      <h2 className="text-4xl py-8 text-white mb:text-xl font-roboto tb:text-2xl lg:text-2xl">
        Email Us:{" "}
        <span ref={emailRef} id="email-text" className="underline">
          contact@etutor4me.com
        </span>
      </h2>
      <button
        onClick={handleCopy}
        className="relative"
        aria-label="Copy email address"
      >
        <Image
          className="w-7 h-7 cursor-pointer"
          src={icon}
          alt="Copy Icon"
          width={28}
          height={28}
        />
       <div className='border-[1px] border-white h-fit absolute -right-28  py-1 px-2  rounded-md hidden group-hover:block '>
              <p className='text-sm text-white '>Copy to clipboard</p>
          </div>
      </button>
    </div>
  );
};

export default EmailCopyComponent;