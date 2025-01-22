import { motion } from 'motion/react';
import React from 'react';
import { Stack } from '@/@types/Stack';
import Icon from './Icon';

type ColorSettings = {
  backgroundColor?: string;
  textColor?: string;
}

type StackItemProps = Stack & ColorSettings;

function StackItem({ name, IconKey, backgroundColor = 'rgb(30, 58, 138)', textColor = 'rbg(255, 255, 255)' }: StackItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='cursor-default group/stack inline-flex justify-center items-center overflow-hidden text-xs px-2 py-1 rounded-b-lg'
      style={{ backgroundColor, color: textColor }}
    >
      <Icon IconKey={ IconKey } className='text-md group-hover/stack:mr-1 transition-all duration-100' />
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

export default StackItem