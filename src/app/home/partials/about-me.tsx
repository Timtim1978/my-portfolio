import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

const AboutMe = () => {
  return (
    <div className='my-12 border-t border-neutral-800'>
      <div className='custom-container flex flex-col justify-between gap-10 py-10 md:flex-row md:items-start'>
        <div className='md:flex-2'>
          <p className='text-display-md max-w-[90%] font-bold text-white md:text-xl'>
            I turn ideas and designs into functional, accessible, and performant
            websites{' '}
            <span
              style={{
                color: 'var(--Primary-300, #149BB0)',
                display: 'inline-block',
              }}
            >
              using modern frondend technologies.
            </span>{' '}
          </p>
        </div>

        <div className='flex flex-col gap-6 pr-6 md:mr-auto md:flex-1'>
          <p className='text-xs-regular md:text-sm-regular text-neutral-400 md:mb-14'>
            About Me
          </p>

          <div className='flex-start gap-4'>
            {socialMediaData.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                className='flex-center size-10 rounded-full border border-neutral-800 p-2.5'
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className='h-full w-auto'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto mt-3 mb-3 w-[1200px] max-w-full border-t border-neutral-900'></div>

      {/*  WHAT I DO SECTION  */}
      <div className='custom-container flex flex-wrap items-center gap-10 md:gap-16 md:py-16'>
        {/* Image */}
        <Image
          src='/images/foto-profille.webp'
          alt='About photo'
          width={453}
          height={513}
          className='h-[409px] w-[361px] flex-[2.3] basis-85 object-cover md:h-[513px] md:w-[453px]'
        />

        {/* Grid */}
        <div className='grid flex-[7.7] basis-85 gap-8 md:grid-cols-2'>
          {/* ITEM 1 */}
          <div className='flex flex-col items-start gap-4'>
            <Image
              src='/icons/icon-gravity.svg'
              alt='Frontend'
              width={36}
              height={36}
            />
            <div>
              <p className='text-md-bold text-white'>Frontend Development</p>
              <p className='text-sm-regular mt-1 text-neutral-400'>
                I build responsive, accessible, and scalable websites using
                modern frontend tools and best practices.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className='flex flex-col items-start gap-4'>
            <Image
              src='/icons/icon-web.svg'
              alt='Performance'
              width={36}
              height={36}
            />
            <div>
              <p className='text-md-bold text-white'>Web Performance</p>
              <p className='text-sm-regular mt-1 text-neutral-400'>
                I optimize websites for speed and efficiency to ensure smooth
                experiences across all devices.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className='flex flex-col items-start gap-4'>
            <Image
              src='/icons/icon-mingcute.svg'
              alt='Components'
              width={36}
              height={36}
            />
            <div>
              <p className='text-md-bold text-white'>Component-Based UI</p>
              <p className='text-sm-regular mt-1 text-neutral-400'>
                I specialize in crafting reusable UI components that are clean,
                maintanable, and aligned with design systems.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className='flex flex-col items-start gap-4'>
            <Image
              src='/icons/icon-prime_mobile.svg'
              alt='Responsive Design'
              width={36}
              height={36}
            />
            <div>
              <p className='text-md-bold text-white'>Responsive Design</p>
              <p className='text-sm-regular mt-1 text-neutral-400'>
                I ensure that every layout adapts beuatifully to different
                screen sizes-from mobile to dekstop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
