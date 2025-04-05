import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { UserRound, Key, PhoneCall, Menu, X } from 'lucide-react';
import NavButton from './NavButton';
import { MenuBar } from './MenuBar';

const Header = () => {
  return (
    <header className='bg-[#1c1d30] sticky top-0 z-20text-white px-4 py-2 sm:px-10 sm:py-3'>
      <div className='flex mx-auto h-12 items-center justify-between w-full sm:max-w-7xl lg:max-w-[100%] lg:px-10'>
        <div className='sm:hidden'>
          <Link
            href='/'
            className='flex justify-center items-center'
            title='Home'
          >
            <Image
              src='/images/jf-logo-sm.png'
              alt='JF logo'
              width={40}
              height={40}
            />
          </Link>
        </div>

        <div className='hidden sm:flex items-center gap-2'>
          <Link
            href='/'
            className='flex justify-center items-center gap-2 ml-0'
            title='Home'
          >
            <Image
              src='/images/jflogo.png'
              alt='JF logo'
              width={150}
              height={100}
            />
          </Link>
        </div>

        <MenuBar />

        <div className='hidden sm:flex items-center justify-between gap-4'>
          {/* <NavButton href='/sign-in' icon={UserRound} label='Sign In' /> */}

          <Link
            href='/about'
            className='flex justify-center items-center text-[#787891] hover:opacity-70 transition-all duration-500 ease-in-out'
            title='About Us'
          >
            About Us
          </Link>

          <Link
            href='/contact'
            className='flex justify-center items-center gap-2 ml-0 transition-all duration-500 ease-in-out'
            title='Contact'
          >
            <Button variant='green'>
              <PhoneCall /> Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
