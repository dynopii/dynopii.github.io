import React from 'react';
import { PartnerCard } from './PartnerCard';

interface Props {

}

export const StrategicPartners: React.FC<Props> = () => {
  return (
    <section>
      <div className='mx-auto' style={{ maxWidth: '1200px' }}>
        <h3 className='text-h3 font-semibold text-gray-e0e mb-40 text-center pt-70 mb-70'>Strategic Partners</h3>
        <div className='flex items-center justify-between md:flex-col mb-70'>
          {partners.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const partners = [
  {
    id: '1',
    name: 'Julia DeWahl',
    designation: 'CEO',
    photo: '/images/team-demo-pic.png'
  },
  {
    id: '2',
    name: 'Julia DeWahl',
    designation: 'Angel Investor',
    photo: '/images/team-demo-pic.png'
  },
  {
    id: '3',
    name: 'Julia DeWahl',
    designation: 'Ex-Paypal',
    photo: '/images/team-demo-pic.png'
  },
  {
    id: '4',
    name: 'Julia DeWahl',
    designation: 'Ex-Amazon',
    photo: '/images/team-demo-pic.png'
  }
];
