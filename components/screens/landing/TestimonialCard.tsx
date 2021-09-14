import React from 'react';
import Image from 'next/image';
interface Props {

}

export const TestimonialCard: React.FC<Props> = () => {
  return (
    <div className='p-30 bg-gray-333 rounded-default'>
      <p className='text-body-sm font-normal tracking-wide text-eaeaea'>Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...</p>
      <div className='flex items-center justify-start mt-15'>
        <div className=' mr-10'>
          <img width={45} height={45} src='/images/testimonial-profile-pic-demo.png' alt='User' />
        </div>
        <div>
          <p className='text-body-lg font-medium text-gray-f2f mb-1'>Rhimjhim Bhadani</p>
          <p className='text-body-sm font-normal text-gray-bdb'>@rhimjhim</p>
        </div>
      </div>
    </div>
  );
};
