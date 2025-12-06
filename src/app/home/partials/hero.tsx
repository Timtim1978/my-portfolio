'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SkewMotion from '@/components/ui/skew-motion';
import GradientRadial from '@/components/ui/gradient-radial';
import GridBackground from '@/components/ui/grid-background';

const HeroSection = () => {
  return (
    <section className='relative w-full overflow-hidden' id='hero'>
      {/* Background full-width */}
      <GradientRadial positionLayer1='top left' positionLayer2='top center' />
      <GridBackground />

      {/* Konten tetap di dalam container agar sejajar dengan layout lain */}
      <div className='custom-container flex flex-col-reverse items-center gap-7 md:flex-row md:gap-10'>
        {/* Text */}
        <div className='flex-[5.3] basis-80 md:mt-48'>
          <SkewMotion>
            <h3 className='text-neutral-25 mb-2 text-lg font-bold md:mb-4 md:text-5xl'>
              Hi, I'm Timtim Mulyani
            </h3>
          </SkewMotion>

          <SkewMotion delay={0.2}>
            <h1 className='mb-3 text-[56px] leading-none font-bold tracking-[-0.06em] lg:md:mb-5 lg:md:text-[96px]'>
              FRONT<span className='font-charm font-normal'>END</span> DEVELOPER
            </h1>
          </SkewMotion>

          <SkewMotion delay={0.2}>
            <p className='mb-3 text-lg text-neutral-400 lg:md:mb-16'>
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </p>
          </SkewMotion>

          <SkewMotion delay={0.4}>
            <Button className='text-neutral-25 w-full bg-[#149bb0] px-6 py-3 hover:bg-cyan-500 md:w-[287px]'>
              Hire Me
            </Button>
          </SkewMotion>
        </div>

        {/* Image */}
        <div className='relative mr-0 flex flex-[4.7] basis-80 justify-center md:mr-5 md:justify-end'>
          <div className='relative flex h-[496px] w-[252px] items-start md:-mt-12 md:h-[671px] md:w-[341px]'>
            <Image
              src='/images/image-12.svg'
              alt='name tag'
              fill
              className='object-contain'
            />
            <div className='absolute top-[32%] left-[3%] h-[310px] w-[235px] md:h-[420px] md:w-[320px]'>
              <Image
                src='/images/foto-profile-2.png'
                alt='profile'
                fill
                className='rounded-md object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
