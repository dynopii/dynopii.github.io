import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

interface Props {

}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className='py-40 md:px-30 bg-gray-333 m-30 rounded-default'>
      <div className='mx-auto' style={{ maxWidth: '1200px' }}>

        <div className='flex items-center md:flex-col md:items-start justify-between mb-50 md:mb-20'>
          <h6 className='font-normal text-h6 text-gray-f2f'>Copyright © 2021 Dynopii, Inc. All rights reserved.</h6>
          <h6 className='font-normal text-h6 text-gray-f2f md:mt-1'>hello@dynopii.com</h6>
        </div>

        <div className='flex items-center justify-between md:flex-col md:items-start'>
          <div className='flex items-center md:flex-col md:items-start'>
            <p className='mr-30 text-gray-bdb text-body-lg'>Privacy</p>
            <p className='mr-30 text-gray-bdb text-body-lg'>Terms of Use</p>
            <p className='mr-30 text-gray-bdb text-body-lg'>Sitemap</p>
            <p className='text-gray-bdb text-body-lg'>Contact Us</p>
          </div>
          <div className='flex items-center md:mt-20'>
            <FaLinkedinIn className='mr-40' size={22} color='#ffffff' />
            <AiOutlineInstagram className='mr-40' size={25} color='#ffffff' />
            <AiOutlineTwitter size={25} color='#ffffff' />
          </div>
        </div>
      </div>
    </footer>
  );
};
