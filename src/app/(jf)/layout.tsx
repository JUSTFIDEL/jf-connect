import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import LoggedHeader from '@/components/LoggedHeader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Buy/sell your cars here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-[#141523] bg-no-repeat bg-cover bg-center max-h-[50dvh] text-white antialiased`}
    >
      {/* <LoggedHeader /> */}
      {children}
    </div>
  );
}
