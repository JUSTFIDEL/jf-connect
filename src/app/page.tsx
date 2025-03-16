import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col items-center sm:items-start'>
        <h1 className='text-5xl font-bold text-center'>
          Best cars money can buy.
        </h1>
      </main>
    </div>
  );
}
