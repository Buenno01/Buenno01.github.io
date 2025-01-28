'use client';

import { motion } from 'motion/react';
import React, { ComponentProps } from 'react';
import { IconItemType } from '@/@types/IconItem';
import Icon from './Icon';
import { twMerge } from 'tailwind-merge';

type LiProps = ComponentProps<'li'>;

type IconItemProps = IconItemType & LiProps & {
  url?: string | null;
};

function IconItem({ name, iconKey, backgroundColor = 'rgb(30, 58, 138)', textColor = 'rbg(255, 255, 255)', url = null, ...rest }: IconItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const variants = url ? {
    hidden: {
      width: 'var(--icon-item-hidden)',
      marginLeft: 'var(--icon-item-hidden-margin-left)',
    },
    visible: {
      width: 'var(--icon-item-visible)',
      marginLeft: '0.25rem',
    },
  } : {
    hidden: {
      width: 0,
      marginLeft: 0,
    },
    visible: {
      width: 'var(--icon-item-visible)',
      marginLeft: '0.25rem',
    },
  }

  return (
    <li
      { ...rest }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={ twMerge('cursor-default relative inline-flex justify-center items-center overflow-hidden text-xs px-2 py-1 rounded-lg lg:translate-y-[-125%] group-hover:translate-y-0 transition-transform', rest.className) }
      style={{ backgroundColor, color: textColor }}
    >
      <Icon iconKey={ iconKey } className='text-md transition-all duration-100' />
      {
        url && <a href={ url } target='_blank' referrerPolicy='no-referrer' className='absolute w-full h-full top-0 left-0 text-transparent'>Link</a>
      }
      <motion.span
        variants={ variants }
        initial='hidden'
        animate={isHovered ? 'visible' : 'hidden'}
        className='w-0 overflow-hidden'
      >
        { name }
      </motion.span>
    </li>
  )
}

export default IconItem;