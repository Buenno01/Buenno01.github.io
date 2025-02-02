import IconItem from '@/components/ui/IconItem';
import Image from 'next/image';
import React from 'react';

function SummarySlide() {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-full'>
      <div className='h-full flex flex-col justify-center p-6 md:p-8 md:max-w-xl md:mx-auto'>
        <h1>
          <span className='absolute text-transparent'>Portfolio: </span>
          Vínicius Bueno Costa
        </h1>
        <p className='text-sm font-light'>
          Fullstack Developer
        </p>
        <p className='my-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati, aliquid ullam magnam maiores sunt quidem cumque dolorem ipsam modi nemo deserunt ad vitae fugit nam adipisci necessitatibus cum odio.
        </p>
        <nav>
          <ul className='flex gap-2'>
            <IconItem backgroundColor='#fff' iconKey='github' name='GitHub' textColor='#000' className='lg:translate-y-0' expanded={ true } url={'https://github.com/Buenno01'}  />
            <IconItem backgroundColor='#0e76a8' iconKey='linkedin' name='LinkedIn' textColor='#fff' className='lg:translate-y-0' expanded={ true } url={'https://www.linkedin.com/in/viniciusbuenocosta/'}  />
          </ul>
        </nav>
      </div>
      <div className='relative after:absolute after:inset-0 after:bg-gradient-to-t md:after:bg-gradient-to-r after:from-background-900 after:to-transparent'>
        <Image className='object-cover w-full h-full' src='/banner1.jpg' width={960} height={960} alt='Something'></Image>
      </div>
    </div>
  )
}

export default SummarySlide;