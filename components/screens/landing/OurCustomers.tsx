import React from 'react';
import Image from 'next/image';

interface Props {

}

export const OurCustomers: React.FC<Props> = () => {
  return (
    <div className='py-40'>
      <h3 className="text-h3 md:text-h5 font-semibold text-gray-e0e text-center my-40">
        Our Customers
      </h3>
      <div className='flex items-center justify-around flex-wrap'>
        {Array.from(Array(6).keys()).map((loader, i) => (
          <div className='w-40 h-40 bg-gray-333 rounded-default flex items-center justify-center mt-20' key={i}>
            <div className='w-30 h-30 flex items-center justify-center'>
              <img src='/images/retool.png' width={100} height={100} className='h-full w-full object-contain' alt='Retool' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
