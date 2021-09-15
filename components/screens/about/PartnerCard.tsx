import React from 'react';

interface Props {
  name: string;
  designation: string;
  photo: string;
}

export const PartnerCard: React.FC<Props> = ({ name, designation, photo }) => {
  return (
    <div>
      <div className='overflow-hidden rounded-default w-32 h-32'>
        <img src={photo} className='object-cover w-full h-full' alt='Team' />
      </div>
      <h5 className="text-gray-f2f text-h5 font-semibold mt-25">
        {name}
      </h5>
      <p className='font-regular text-gray-bdb text-body-lg mt-10'>{designation}</p>
    </div>
  );
};
