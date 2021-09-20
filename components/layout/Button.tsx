import React from 'react';

interface Props {

}

export const Button: React.FC<Props> = () => {
  return (
    <div className='flex items-center mt-40 justify-center mb-70'>
      <button className='uppercase text-gray-f2f font-medium px-60 py-20 bg-brand rounded-default text-button'>Read more</button>
    </div>
  );
};
