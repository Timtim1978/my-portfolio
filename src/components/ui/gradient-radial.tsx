'use client';

import React from 'react';

type GradientRadialProps = {
  positionLayer1?: string;
  positionLayer2?: string;
  positionLayer3?: string;
};

const GradientRadial = ({
  positionLayer1 = 'top left',
  positionLayer2 = 'top center',
  positionLayer3 = '50% 50%',
}: GradientRadialProps) => {
  return (
    <>
      <div
        className='pointer-events-none absolute -z-10 md:hidden'
        style={{
          width: '110vw',
          height: '100vh',
          top: '-60',
          left: '-10',
          opacity: 0.8,
          background: `radial-gradient(120% 120% at ${positionLayer1}, rgba(20,155,176,0.8) 0%, rgba(20,155,176,0) 100%)`,
        }}
      />

      <div
        className='pointer-events-none absolute -z-10 hidden md:block'
        style={{
          width: '1845px',
          height: '1230px',
          top: '-501px',
          left: '-1047px',
          opacity: 0.8,
          background: `radial-gradient(50% 50% at ${positionLayer1}, rgba(20,155,176,0.8) 0%, rgba(20,155,176,0) 100%)`,
        }}
      />

      <div
        className='pointer-events-none absolute -z-10 hidden md:block'
        style={{
          width: '1845px',
          height: '1230px',
          top: '-501px',
          left: '-1047px',
          opacity: 0.6,
          background: `radial-gradient(50% 50% at ${positionLayer2}, rgba(20,155,176,0.8) 0%, rgba(20,155,176,0) 100%)`,
        }}
      />

      <div
        className='pointer-events-none absolute -z-10 hidden md:block'
        style={{
          width: '1845px',
          height: '1230px',
          top: '-501px',
          left: '-1047px',
          opacity: 0.9,
          background: `radial-gradient(50% 50% at ${positionLayer3}, rgba(20,155,176,0.8) 0%, rgba(20,155,176,0) 100%)`,
        }}
      />
    </>
  );
};

export default GradientRadial;
