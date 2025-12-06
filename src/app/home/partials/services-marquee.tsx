import { Marquee } from '@/components/ui/marquee';
import { servicesMarqueeData } from '@/constants/services-marquee-data';

const ServicesMarquee = () => {
  return (
    <div className='mt-15 md:mt-30'>
      {/* Container biru selebar marquee */}
      <div
        className='custom-container relative my-12 flex h-[62px] items-center overflow-hidden md:h-[108px]'
        style={{ background: 'var(--color-primary-300, #149BB0)' }}
      >
        {/* Gradient kiri */}
        <div className='from-var(--color-primary-300) pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-linear-to-r to-transparent' />
        {/* Gradient kanan */}
        <div className='from-var(--color-primary-300) pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-linear-to-l to-transparent' />

        <Marquee className='py-6' pauseOnHover={true}>
          {servicesMarqueeData.map((item, i) => (
            <div key={i} className='flex items-center gap-3'>
              <img
                src='/images/Frame.svg'
                className='h-[38px] w-[38px] md:h-[60px] md:w-[60px]'
                alt='icon'
              />
              <span className='text-display-md font-bold text-white md:text-xl'>
                {item.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesMarquee;
