import React from 'react'

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-4 h-fit bg-background-500 relative z-10'>
      { children }
    </div>
  );
}

export default CardWrapper;