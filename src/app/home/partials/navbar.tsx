'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0)', 'rgba(12,13,13,0)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(0px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 left-0 z-50 w-full'
    >
      <div className='flex justify-between pt-4 md:justify-center md:pt-8'>
        <div className='custom-container backdrop-blur-40 flex h-[48px] w-[361px] items-center justify-between gap-6 rounded-full bg-black/40 px-6 md:w-[528px] md:bg-black/20'>
          <h1 className='text-lg font-bold text-white'>Timtim</h1>

          {/* DESKTOP NAV */}
          <nav className='hidden lg:block'>
            <ul className='flex'>
              {navigationData.map((data) => (
                <li key={data.label}>
                  <Link
                    href={data.href}
                    className='p-4 transition-colors duration-300 hover:text-cyan-500'
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                type='button'
                className='text-white transition hover:opacity-75 lg:hidden'
              >
                <Menu className='cursor-pointer' />
              </button>
            </SheetTrigger>

            <SheetContent>
              <nav className='mt-16'>
                <ul className='flex flex-col gap-4'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          href={data.href}
                          className='py-4 transition-colors duration-300 hover:text-purple-300'
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
