'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiSequelize, SiMongodb } from 'react-icons/si';
import { tabsData, TabItem } from '@/constants/tabs-data';

const renderIcon = (icon: TabItem['icon']) => {
  switch (icon) {
    case 'html':
      return <FaHtml5 className='text-2xl text-orange-600' />;
    case 'css':
      return <FaCss3Alt className='text-2xl text-blue-600' />;
    case 'js':
      return <FaJs className='text-2xl text-yellow-500' />;
    case 'ts':
      return <SiTypescript className='text-2xl text-blue-700' />;
    case 'sequelize':
      return <SiSequelize className='text-2xl text-blue-500' />;
    case 'mongodb':
      return <SiMongodb className='text-2xl text-green-600' />;
    default:
      return null;
  }
};

const Tabs: React.FC = () => {
  return (
    <section className='my-12 px-6 md:px-12'>
      <div className='flex flex-col gap-6 md:flex-row'>
        {/* Sidebar (vertical border + highlight) */}
        <div className='relative hidden w-1/4 flex-col border-l border-gray-300 md:flex'>
          <motion.div
            className='absolute left-0 w-1 bg-blue-500'
            style={{ top: 0, height: '100%' }}
          />
        </div>

        {/* Tab items */}
        <div className='flex flex-1 flex-col gap-4'>
          {tabsData.map((tab, index) => (
            <motion.div
              key={tab.key}
              className='flex cursor-pointer items-center gap-4 border-b border-gray-300 pb-2'
              whileHover={{ scale: 1.05, translateX: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {renderIcon(tab.icon)}
              <div>
                <h4 className='text-neutral-25 font-bold'>{tab.label}</h4>
                <p className='text-sm text-neutral-400'>{tab.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
