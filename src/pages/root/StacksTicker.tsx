import Icon from '@/components/ui/Icon';
import Ticker from '@/components/ui/Ticker';
import about from '@/data/about';
import React from 'react'

function StacksTicker() {
  const stacks = about.stacks.map((stack) =>  stack.items).reduce((acc, cur) => acc.concat(cur), []);
  return (
    <Ticker className="bg-cyan py-4 z-20 relative" duration={25}>
    {
      stacks.map((item, index) => (
        <div key={item.iconKey + '_' + index } className="relative group">
          <span
            className="absolute top-1/2 left-1/2 w-fit z-10 text-center px-4 py-2 rounded-md translate-x-[-50%] translate-y-[-50%] whitespace-nowrap bg-background-900 shadow-lg
              opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:top-0 transition-all duration-300 ease-in-out cursor-default
            "
          >
            { item.name }
          </span>
          <Icon className="text-5xl mx-6" iconKey={item.iconKey} />
        </div>
        ))
    }
  </Ticker>
  )
}

export default StacksTicker;