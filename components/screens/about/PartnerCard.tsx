import React from 'react';

interface Props {
  name: string;
  designation: string;
  photo: string;
}

export const PartnerCard: React.FC<Props> = ({ name, designation, photo }) => {
  return (
    <div className='w-42 mr-40'>
      <div className='overflow-hidden rounded-default w-40 h-40'>
        <img src={photo} className='object-cover w-full h-full' alt='Team' />
      </div>
      <h5 className="text-gray-f2f text-h5 font-semibold mt-25">
        {name}
      </h5>
      <p className='font-regular text-gray-bdb text-body-lg mt-10'>{designation}</p>
    </div>
  );
};
