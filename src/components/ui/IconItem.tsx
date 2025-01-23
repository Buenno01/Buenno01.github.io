import { motion } from 'motion/react';
import React, { ComponentProps } from 'react';
import { IconItemType } from '@/@types/IconItem';
import Icon from './Icon';
import { twMerge } from 'tailwind-merge';

type LiProps = ComponentProps<'li'>;

type IconItemProps = IconItemType  & LiProps;

function IconItem({ name, iconKey, backgroundColor = 'rgb(30, 58, 138)', textColor = 'rbg(255, 255, 255)', ...rest }: IconItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      { ...rest }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={ twMerge('cursor-default group/stack inline-flex justify-center items-center overflow-hidden text-xs px-2 py-1 rounded-lg lg:translate-y-[-125%] group-hover:translate-y-0 transition-transform', rest.className) }
      style={{ backgroundColor, color: textColor }}
    >
      <Icon iconKey={ iconKey } className='text-md group-hover/stack:mr-1 transition-all duration-100' />
      <motion.span
        variants={{
          hidden: { width: 0 },
          visible: { width: 'auto' },
        }}
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