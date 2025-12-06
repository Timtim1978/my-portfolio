'use client';

const GridBackground = () => {
  return (
    <svg
      className='pointer-events-none absolute top-[-20px] left-0 z-0 h-[320px] w-full opacity-100 mix-blend-soft-light md:top-[-64px] md:left-[-304px] md:h-[503px] md:w-[1089px]'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        {/* GRID 1 — Small squares */}
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
            stroke='rgba(255,255,255,0.28)'
            strokeWidth='1'
          />
        </pattern>

        {/* GRID 2 — Cross shape */}
        <pattern
          id='grid2'
          width='80'
          height='80'
          patternUnits='userSpaceOnUse'
        >
          <line
            x1='40'
            y1='30'
            x2='40'
            y2='50'
            stroke='rgba(255,255,255,0.50)'
            strokeWidth='1'
          />
          <line
            x1='30'
            y1='40'
            x2='50'
            y2='40'
            stroke='rgba(255,255,255,0.50)'
            strokeWidth='1'
          />
        </pattern>

        {/* MATCHED FADE — Mengikuti radial gradient Hero */}
        <radialGradient id='fadeMask' cx='0%' cy='0%' r='180%' fx='0%' fy='0%'>
          <stop offset='0%' stopColor='white' stopOpacity='0.9' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </radialGradient>

        {/* MASK AREA — besar seperti radial-gradient Hero */}
        <mask id='fadeMaskRef'>
          <rect
            x='-1200'
            y='-700'
            width='2600'
            height='2200'
            fill='url(#fadeMask)'
          />
        </mask>
      </defs>

      {/* RENDER GRID */}
      <g mask='url(#fadeMaskRef)' opacity='0.85'>
        <rect width='100%' height='100%' fill='url(#grid1)' />
        <rect width='100%' height='100%' fill='url(#grid2)' />
      </g>
    </svg>
  );
};

export default GridBackground;
