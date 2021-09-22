import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { colors } from '../../../shared/constants';
import Link from 'next/link';

interface Props {

}

export const TeamCard: React.FC<Props> = () => {
  return (
    <div className='mt-70 md:mt-40 w-44 mr-40'>
      <div className='overflow-hidden rounded-default w-40 h-40'>
        <img src='/images/team-demo-pic.png' className='object-cover w-full h-full' alt='Team' />
      </div>
      <h5 className="text-gray-f2f text-h5 font-semibold mt-25">
        Julia DeWahl
      </h5>
      <p className='text-gray-bdb font-normal text-body-sm mt-10'>
        Past: Engineering leader at Coinbase.
      </p>
      <div className='flex items-center mt-5'>
        <a href='https://twitter.com/dynopii' target='_blank' rel="noreferrer">
          <AiOutlineTwitter size={15} fill={colors.twitter} />
        </a>
        <a href='https://in.linkedin.com/company/dynopii' className='ml-15' target='_blank' rel="noreferrer">
          <FaLinkedinIn size={15} fill={colors.linkedin} />
        </a>
      </div>
    </div>
  );
};
