import React from 'react';
import { IconBaseProps } from 'react-icons';

interface Props {
    id: string;
    Icon: React.ReactNode;
    label: string;
    size?: 'small' | 'large';
}

export const FeatureCard: React.FC<Props> = ({ Icon, label, size = 'small' }) => {
    const large = size === 'large';
    return (
        <div className={`bg-gray-444 flex items-center justify-center flex-col ${large ? 'h-56 w-80' : 'h-48 w-60'} rounded-default`}>
            {Icon}
            {
                large
                    ? <h6 className='text-h6 font-semibold text-gray-e0e mt-35 text-center'>{label}</h6>
                    : <p className='text-body-lg font-normal text-gray-e0e mt-30'>{label}</p>
            }
        </div>
    );
};
