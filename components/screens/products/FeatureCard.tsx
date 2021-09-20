import React from 'react';

interface Props {
    id: string;
    Icon: React.ReactNode;
    label: string;
}

export const FeatureCard: React.FC<Props> = ({ Icon, label }) => {
    return (
        <div className='bg-gray-444 flex items-center justify-center flex-col w-60 h-48 rounded-default'>
            {Icon}
            <p className='text-body-lg font-normal text-gray-e0e mt-30'>{label}</p>
        </div>
    );
};
