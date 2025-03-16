import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='hidden sm:block sm:bg-[#1c1d30] sm:h-16 sm:p-2 sm:sticky sm:top-0 sm:z-20 sm:text-white'>
      <div className='flex h-12 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <Link
            href='/home'
            className='flex justify-center items-center gap-2 ml-0'
            title='Home'
          >
            <h1 className='text-base'>JF-Connect</h1>
          </Link>
        </div>

        <div className='flex items-center'></div>
      </div>
    </header>
  );
};

export default Header;
