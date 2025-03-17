import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { UserRound, Key } from 'lucide-react';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header className='hidden animate-slide sm:block sm:bg-[#1c1d30] sm:sticky sm:top-0 sm:z-20 sm:text-white sm:px-10 sm:py-3'>
      <div className='flex h-12 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
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

        <div className='flex items-center justify-between gap-2'>
          <NavButton href='/sign-in' icon={UserRound} label='Sign In' />
          <Link
            href='/sign-up'
            className='flex justify-center items-center gap-2 ml-0'
            title='Home'
          >
            <Button variant='green'>
              <Key /> Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
