'use client';

import React from 'react';

const GridBackground = () => {
  return (
    <svg
      className='pointer-events-none absolute top-[-64px] left-[-304px] z-0 h-[503px] w-[1089px] opacity-80'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        {/* GRID 1: kotak kecil */}
        <pattern
          id='grid1'
          width='20'
          height='20'
          patternUnits='userSpaceOnUse'
        >
          <rect
            x='0'
            y='0'
            width='20'
            height='20'
            fill='none'
            stroke='rgba(255,255,255,0.3)'
            strokeWidth='1'
          />
        </pattern>

        {/* GRID 2: bentuk plus (+) kecil */}
        <pattern
          id='grid2'
          width='80'
          height='80'
          patternUnits='userSpaceOnUse'
        >
          {/* Garis vertikal */}
          <line
            x1='40'
            y1='30'
            x2='40'
            y2='50'
            stroke='rgba(255,255,255,0.6)'
            strokeWidth='1'
          />
          {/* Garis horizontal */}
          <line
            x1='30'
            y1='40'
            x2='50'
            y2='40'
            stroke='rgba(255,255,255,0.6)'
            strokeWidth='1'
          />
        </pattern>

        {/* MASK GRADIENT dari kiri atas ke kanan bawah */}
        <radialGradient id='fadeMask' cx='0%' cy='0%' r='120%' fx='0%' fy='0%'>
          <stop offset='0%' stopColor='white' stopOpacity='0.6' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </radialGradient>

        <mask id='fadeMaskRef'>
          <rect width='100%' height='100%' fill='url(#fadeMask)' />
        </mask>
      </defs>

      {/* Apply kedua grid + mask */}
      <g mask='url(#fadeMaskRef)'>
        <rect width='100%' height='100%' fill='url(#grid1)' />
        <rect width='100%' height='100%' fill='url(#grid2)' />
      </g>
    </svg>
  );
};

export default GridBackground;
