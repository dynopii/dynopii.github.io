import React from 'react';
interface Props {
  id: string;
  Icon: React.ReactNode;
  description: string;
}

export const ContactItem: React.FC<Props> = ({ Icon, description }) => {
  return (
    <div className='flex items-start mb-45'>
      {Icon}
      <p className='text-subtitle text-white font-medium text-f2f ml-20 w-9/12'>{description}</p>
    </div>
  );
};
