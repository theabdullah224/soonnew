'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import line from "../../../public/assets/comingsoon/whiteline.svg";
import "./hoverClasses.css"
const menuItems = [
  { level: 0, text: 'Coming Soon', href: '/' },
  { level: 1, text: 'About Us', href: '/SoonNew/Level1' },
  { level: 2, text: 'Features', href: '/SoonNew/Level2' },
  { level: 3, text: 'Kickstart', href: '/SoonNew/Level3' },
  { level: 4, text: 'Support', href: '/SoonNew/Level4' },
];

const SoonNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    // Ensure hover state is reset on click
    setHoveredIndex(null);
  };

  const getText = (index: number) => {
    // Determine text based on selected or hovered state
    if (selectedIndex !== null && selectedIndex === index) {
      return menuItems[selectedIndex].text;
    }
    if (hoveredIndex !== null && hoveredIndex === index) {
      return menuItems[hoveredIndex].text;
    }
    return `Level ${menuItems[index].level}`;
  };

  return (
    <nav className='py-11 container mx-auto h-16 max-w-[800px] border-2 mb:max-w-[400px] mb:px-5 mb:flex mb:justify-center mb:items-center xl:py-9 lg:py-8'>
      <ul className='flex items-center justify-between w-full'>
        {menuItems.map((item, index) => (
          <li
            key={item.level}
            className={`flex items-center font-roboto  menu  justify-between text-[16px] lg:text-[13px] font-semibold ${index === menuItems.length - 1 ? 'w-auto' : 'w-[15%]'} text-center mb:text-[9px]`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(index)}
          >
            <Link href={item.href}>
              <p className='text-white transition-colors duration-300 ease-in-out'>
                {getText(index)}
              </p>
            </Link>
            {index < menuItems.length - 1 && (
              <Image src={line} alt="Separator" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SoonNavbar;
