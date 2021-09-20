import React from 'react';
import { DhwaniLogo } from '../../SVGs';
import { AiFillRobot } from "react-icons/ai";
import { SAAS } from '../../SVGs';
import { BsFillLightningFill } from 'react-icons/bs';
import { CgInsights } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";
import { FeatureCard } from './FeatureCard';

interface Props {

}

export const Dhwani: React.FC<Props> = () => {
  return (
    <div className='bg-gray-333 rounded-default'>
      <div className='dhwani-cover-bg h-96 p-30 flex items-center justify-center'>
        <DhwaniLogo />
        <h4 className='text-h4 text-gray-f2f font-normal ml-15'>Dhwani</h4>
      </div>
      <div className='p-30'>
        <h6 className='text-h6 font-semibold text-gray-f2f mt-20'>Overview</h6>
        <p className='text-body-lg font-normal text-gray-e0e mt-30'>Create effortless & personalized customer experiences with the best in class AI-powered digital and voice automation. Our vision is to make it simple for consumers to do business with you by redefining how artificial intelligence and human insight enable personalized, predictive and effortless customer experiences.</p>

        <h6 className='text-h6 font-semibold text-gray-f2f mt-30 mb-30'>Features</h6>

        <div className='grid-feature-container'>
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>

    </div>
  );
};

const features = [
  {
    id: '1',
    Icon: <AiFillRobot size={40} fill='#777777' />,
    label: 'Ai Agent (Real time)'
  },
  {
    id: '2',
    Icon: <SAAS height={40} />,
    label: 'SAAS base solution'
  },
  {
    id: '3',
    Icon: <HiCursorClick size={40} fill='#777777' />,
    label: 'One-click installation'
  },
  {
    id: '4',
    Icon: <BiCustomize size={40} fill='#777777' />,
    label: 'Customizable Dashboards'
  },
  {
    id: '5',
    Icon: <CgInsights size={40} fill='#777777' color='#777777' />,
    label: `Insights Based \n Dashboards`
  },
  {
    id: '6',
    Icon: <BsFillLightningFill size={40} fill='#777777' />,
    label: '15 Min Installation Time'
  },
];
