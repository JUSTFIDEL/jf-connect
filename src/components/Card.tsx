import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  desc: string;
  amount: string;
  image: string;
};

const Card = ({ title, desc, amount, image }: Props) => {
  return (
    <div className='flex flex-col flex-1 rounded-[10px] bg-[#252539]/80 p-3 min-w-[100] sm:max-w-[180]'>
      <div className='w-full bg-gray-400 rounded mb-2'>
        <Image src={image} alt='image' width={180} height={160} />
      </div>
      <div className='flex flex-col w-full text-left gap-1'>
        <h1 className='text-[12px] font-bold'>{title}</h1>
        {/* <p className='text-[10px] text-white/70'>{desc}</p> */}

        {/* <h1 className='text-[12px] font-bold'>₦{amount}</h1> */}
      </div>
    </div>
  );
};

export default Card;
