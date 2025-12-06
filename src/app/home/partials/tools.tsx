'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiSequelize, SiMongodb } from 'react-icons/si';

const toolsList = [
  {
    icon: <FaHtml5 className='text-orange-600' />,
    label: 'HTML',
    value: '100%',
  },
  { icon: <FaCss3Alt className='text-blue-600' />, label: 'CSS', value: '95%' },
  {
    icon: <FaJs className='text-yellow-500' />,
    label: 'JavaScript',
    value: '90%',
  },
  {
    icon: <SiTypescript className='text-blue-700' />,
    label: 'TypeScript',
    value: '85%',
  },
  {
    icon: <SiSequelize className='text-blue-500' />,
    label: 'Sequelize',
    value: '80%',
  },
  {
    icon: <SiMongodb className='text-green-600' />,
    label: 'MongoDB',
    value: '75%',
  },
];

const Tools = () => {
  return (
    <section className='custom-container my-24 md:my-32 md:ml-24'>
      <div className='relative flex flex-col gap-10 md:flex-row md:gap-10'>
        {/* KIRI */}
        <div className='flex w-full flex-col justify-between md:w-6/12'>
          {/* Text */}
          <div className='max-w-[367px]'>
            <h1 className='text-display-md mb-4 font-bold text-white md:text-xl'>
              Tools I Use to Build
            </h1>
            <p className='mb-8 text-neutral-400'>
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>

          {/* Button */}
          <button className='flex h-[56px] max-w-[367px] items-center justify-center gap-2 bg-[#149BB0] px-4 text-white'>
            Send Message
          </button>
        </div>

        {/* GARIS VERTIKAL */}
        <div className='relative mx-4 -mr-6 hidden w-px bg-neutral-800 md:flex'>
          <motion.div
            className='bg-primary-300 absolute left-0 w-px'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>

        {/* KANAN */}
        <div className='flex w-full flex-col gap-4 md:w-4/12'>
          {toolsList.map((tool, index) => (
            <motion.div
              key={index}
              className='flex items-center justify-between border-b border-neutral-800 pb-3'
              whileHover={{ scale: 1.05, translateX: 6 }}
              transition={{ type: 'spring', stiffness: 260 }}
            >
              {/* Icon + Label di kiri */}
              <div className='flex items-center gap-4'>
                <div className='text-2xl'>{tool.icon}</div>
                <span className='text-lg font-medium text-white'>
                  {tool.label}
                </span>
              </div>

              {/* Value di kanan */}
              <span className='text-lg font-semibold text-white'>
                {tool.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
