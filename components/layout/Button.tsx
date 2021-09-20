import React from 'react';

interface Props {
  title: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
}

export const Button: React.FC<Props> = ({ title, type, disabled }) => {
  return (
    <button type={type || 'button'} disabled={disabled} className='uppercase text-gray-f2f font-medium px-60 py-20 bg-brand rounded-default text-button hover:shadow-btn-hover transition-all duration-300' > {title}</button >
  );
};
