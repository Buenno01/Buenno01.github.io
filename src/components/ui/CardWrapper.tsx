import React from 'react'

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div 
    className='p-3 sm:p-4 h-fit relative z-10
      asdbg-background-500 bg-4
      bg-background-800 backdrop-blur-sm
      border-2 border-background-700
    '
    >
      { children }
    </div>
  );
}

export default CardWrapper;