import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const menuItems = [
    { level: 0, text: "Coming Soon" },
    { level: 1, text: "About Us" },
    { level: 2, text: "Features" },
    { level: 3, text: "Kickstart" },
    { level: 4, text: "Support" },
  ];

  const handleClick = (index: number) => {
    setCurrentPage(index);
    setHoveredIndex(null);
  };

  const getText = (index: number) => {
    return currentPage === index ? menuItems[index].text : "";
  };

  return (
    <nav className="relative w-full py-6 container mx-auto max-w-[785px] lg:max-w-[650px] mb:max-w-[400px] border-white z-10">
      <div className="flex justify-center">
        <ul className="flex items-center justify-between max-w-[970px] mb:px-4 w-full">
          {menuItems.map((item, index) => (
            <li
              key={item.level}
              className={`relative flex icons items-center font-roboto justify-between text-[16px] lg:text-[13px] font-semibold ${
                index === menuItems.length - 1 ? "w-auto" : "w-[15%]"
              } text-center mb:text-[9px]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              <Link href="">
                <motion.p
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className={`text-white transition-transform lg-default:w-[7rem] duration-300 ease-in-out mx-2 px-3 py-1 text-sm mb:px-4 mb:w-[5rem] ${
                    hoveredIndex === index || currentPage === index
                      ? "scale-110 "
                      : ""
                  }`}
                >
                  {getText(index)}
                </motion.p>
              </Link>
              {index < menuItems.length - 1 && (
                // <Image src={line} alt="Separator" />
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;