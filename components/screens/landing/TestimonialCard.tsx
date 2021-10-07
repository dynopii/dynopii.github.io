import React from 'react';
import Image from 'next/image';
interface Props {
  testimonial: string,
  name: string,
  twitterHandle: string,
  photo: string,
}

export const TestimonialCard: React.FC<Props> = ({
  testimonial,
  name,
  twitterHandle,
  photo,
}) => {
  return (
    <div className='p-30 bg-gray-333 rounded-default relative'>
      <p className='text-body-sm font-normal tracking-wide text-eaeaea'>{testimonial}</p>
      <div className='flex items-center justify-start mt-15'>
        {/* <div className=' mr-10'>
          <img width={45} height={45} src={photo} alt='User' />
        </div> */}
        <div className='mt-auto'>
          <p className='text-body-lg font-medium text-gray-f2f mb-1'>{name}</p>
          <p className='text-body-sm font-normal text-gray-bdb'>{twitterHandle}</p>
        </div>
      </div>
    </div>
  );
};
