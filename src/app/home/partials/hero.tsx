'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SkewMotion from '@/components/ui/skew-motion';
import GradientRadial from '@/components/ui/gradient-radial';
import GridBackground from '@/components/ui/grid-background';

const Hero = () => {
  return (
    <section
      className='custom-container relative flex flex-wrap items-center gap-7 overflow-hidden md:gap-10'
      id='hero'
    >
      <GradientRadial positionLayer1='top left' positionLayer2='top center' />

      <GridBackground />

      {/* Teks */}
      <div className='absolute top-[520px] left-[16px] flex w-[361px] flex-[5.3] basis-80 flex-col opacity-100 md:top-[227px] md:left-[70px] md:w-[684px]'>
        <SkewMotion>
          <h3 className='text-neutral-25 mb-2 text-lg font-bold md:mb-4 md:text-5xl'>
            Hi, I'm Timtim Mulyani
          </h3>
        </SkewMotion>

        <SkewMotion delay={0.2}>
          <SkewMotion delay={0.2}>
            <h1 className='mb-3 text-[56px] leading-none font-bold tracking-[-0.06em] lg:md:mb-5 lg:md:text-[96px]'>
              FRONT<span className='font-charm font-normal'>END</span> DEVELOPER
            </h1>
          </SkewMotion>
        </SkewMotion>

        <SkewMotion delay={0.2}>
          <p className='mb-3 text-lg text-neutral-200 lg:md:mb-16'>
            Passionate about fronend development, I focus about crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>
        </SkewMotion>

        <SkewMotion delay={0.4}>
          <Button className='text-neutral-25 w-full bg-[#149bb0] px-6 py-3 hover:bg-cyan-500 md:w-[287px]'>
            <>Hire Me</>
          </Button>
        </SkewMotion>
      </div>

      {/* Image */}
      <div className='relative mr-5 flex flex-[4.7] basis-80 justify-end'>
        <div className='relative h-[496px] w-[252.07px] md:h-[671px] md:w-[341px]'>
          <Image
            src='/images/image-12.svg'
            alt='name tag'
            fill
            className='object-contain'
          />

          <Image
            src='/images/foto-profile-2.png'
            alt='profile'
            width={320}
            height={320}
            className='absolute top-[32%] left-[3%] rounded-e-md object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
