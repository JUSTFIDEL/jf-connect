import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className='flex flex-col flex-1 rounded-[10px] bg-[#252539]/80 p-3 min-w-[110] max-w-[160]'>
      <div className='w-full bg-gray-400 rounded mb-2'>
        <Image src='/images/car3.jpg' alt='image' width={160} height={160} />
      </div>
      <div className='flex flex-col w-full text-left gap-1'>
        <h1 className='text-[12px] font-bold'>Buy Cars</h1>
        <p className='text-[10px] text-white/70'>Clean tokunbo cars</p>

        <h1 className='text-[12px] font-bold'>N5,000,000</h1>
      </div>
    </div>
  );
};

export default Card;
