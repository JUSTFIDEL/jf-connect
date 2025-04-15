'use client';

import React, { useState } from 'react';
import { icons, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const toggle1 = () => {
    setIsClose((prev) => !prev);
  };

  return (
    <div
      className='sm:hidden transition-all ease-in-out '
      onClick={toggle}
      title='Menu'
    >
      <div className='absolute top-5 right-5 z-100'>
        {isOpen ? (
          <div>
            <X />
          </div>
        ) : (
          <div className=''>
            <Menu />
          </div>
        )}
      </div>
      {/* <MenuLinks /> */}
      <div
        onClick={toggle1}
        className={
          isOpen
            ? 'absolute top-0 right-0 min-w-[100%] min-h-dvh p-10 bg-[#1c1d30] text-[18px] transition-all ease-in-out'
            : 'sm:hidden translate-x-[100%]'
        }
      >
        <div className='mt-10 ml-4'>
          <ul className='mt-20 hover:border-b-3 hover:border-green-700'>
            <Link href='/' title='Home'>
              Home
            </Link>
          </ul>
          <ul className='mt-20 hover:border-b-3 hover:border-green-700'>
            <Link href='/about' title='About'>
              About
            </Link>
          </ul>
          <ul className='mt-20 hover:border-b-3 hover:border-green-700'>
            <Link href='/contact' title='Contact'>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

// onClick={toggle} className={isOpen ? 'block' : 'sm:hidden'}

// className =
//   'sm:hidden flex flex-col items-center justify-between gap-4 absolute right-4 transition-all ease-in-out';

{
  /* <div>
  <div className='gap-8'>
    <ul>
      <Link href='/'>Home</Link>
    </ul>
    <ul>
      <Link href='/about'>About</Link>
    </ul>
    <ul>
      <Link href='/contact'>Contact</Link>
    </ul>
  </div>
</div>; */
}
