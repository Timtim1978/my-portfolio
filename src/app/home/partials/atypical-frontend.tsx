import GradientRadial from '@/components/ui/gradient-radial';
import GridBackground from '@/components/ui/grid-background';

export default function NotYourTypical() {
  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      {/* Background radial + grid */}
      <div className='pointer-events-none absolute inset-0 z-0'>
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(circle at 10% 90%, rgba(7,88,100,0.35) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,1) 100%)',
            opacity: 1,
          }}
        />
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.12,
          }}
        />
      </div>

      <div className='custom-container relative z-10 py-24 text-center'>
        <h1 className='text-display-md mb-4 font-bold text-white md:text-xl'>
          Not Your Typical Frontend Developer
        </h1>
        <p className='mb-8 text-neutral-400'>
          I care about how it looks, how it works, and how it feels — all at
          once
        </p>

        {/* FRAMES */}
        <div className='mx-auto mt-16 flex w-[1200px] max-w-full border border-neutral-900 bg-black p-6 md:h-[624px] md:flex-row'>
          {/* Frame 1 */}
          <div className='flex h-[576px] w-[205px] flex-col border-r border-neutral-900 bg-black md:w-96'>
            <div className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'>
              <p className='text-lg font-bold text-white'>Skill</p>
            </div>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((item, idx) => (
              <div
                key={idx}
                className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'
              >
                <p className='text-left text-base text-neutral-300'>{item}</p>
              </div>
            ))}
          </div>

          {/* Frame 2 */}
          <div className='flex h-[576px] w-[66px] flex-col border-r border-neutral-900 bg-[#075864] md:w-96'>
            <div className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'>
              <p className='text-lg font-bold text-white'>With Me</p>
            </div>
            {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white md:h-10 md:w-10'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#075864'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 6L9 17l-5-5' />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Frame 3 */}
          <div className='flex h-[576px] w-[66px] flex-col md:w-96'>
            <div className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'>
              <h3 className='text-lg font-semibold text-white'>Other</h3>
            </div>
            {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className='flex h-[72px] items-center border-b border-neutral-900 px-4 md:px-12'
              >
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 md:h-10 md:w-10'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='black'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18' />
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
