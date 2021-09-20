import React from 'react';

interface Props {

}

export const Button: React.FC<Props> = () => {
  return (
    <button className='uppercase text-gray-f2f font-medium px-60 py-20 bg-brand rounded-default text-button'>Read more</button>
  );
};
