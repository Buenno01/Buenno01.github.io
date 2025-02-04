import IconItem from '@/components/ui/IconItem';
import Image from 'next/image';
import React from 'react';
import about from '@/data/about';

function SummarySlide() {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-full'>
      <div className='h-full flex flex-col justify-center p-6 md:p-8 md:max-w-xl md:mx-auto'>
        <h1>
          <span className='absolute text-transparent'>Portfolio: </span>
          { about.name }
        </h1>
        <h2 className='text-sm font-light capitalize'>
          { about.role }
        </h2>
        <p className='my-4'>
          { about.description }
        </p>
        {
          about.socials.length > 0 && (
            <nav>
              <ul className='flex gap-2'>
                {
                  about.socials.map((social, index) => (
                    <IconItem key={ index } backgroundColor={ social.backgroundColor } iconKey={ social.iconKey } name={ social.name } textColor={ social.textColor } className='lg:translate-y-0' expanded={ true } url={ social.url } />
                  ))
                }
              </ul>
            </nav>
          )
        }
      </div>
      <div className='relative after:absolute after:inset-0 after:bg-gradient-to-t md:after:bg-gradient-to-r after:from-background-900 after:to-transparent'>
        <Image
          className='object-cover w-full h-full'
          src='/banner.png'
          width={ 960 }
          height={ 960 }
          alt='Something'
          sizes='(min-width: 1024px) 50vw, 100vw'
        />
      </div>
    </div>
  )
}

export default SummarySlide;