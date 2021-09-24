import React from 'react';

interface Props {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  uiType?: "primary" | "outlined"
}

export const Button: React.FC<Props> = ({ title, type = 'button', disabled = false, uiType = "primary" }) => {
  if(uiType === 'outlined') return (
    <button type={type || 'button'} disabled={disabled} className='uppercase text-gray-f2f px-60 py-20 sm:px-40 sm:py-15 rounded-default border-gray-f2f border-2  text-white font-normal box-content'> {title}
    </button>
  )
  return (
    <button type={type || 'button'} disabled={disabled} className='uppercase text-gray-f2f font-medium px-60 py-20 sm:px-40 sm:py-15 bg-brand rounded-default text-button hover:shadow-btn-hover transition-all duration-300'> {title}
    </button>
  );
};
