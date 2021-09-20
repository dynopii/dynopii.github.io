import React from 'react';
import { TeamCard } from './TeamCard';

interface Props {

}

export const OurTeam: React.FC<Props> = () => {
  return (
    <section className=''>
      <div className='mx-auto md:px-30' style={{ maxWidth: '1200px', paddingTop: '200px' }}>
        <h3 className='text-h3 font-semibold text-gray-e0e mb-40 text-center'>Our Team</h3>
        <h6 className='text-h6 font-light text-gray-e0e text-center w-7/12 mx-auto'>Our team has led and delivered large-scale software and design projects in multiple startups and high-growth environments like Intel, and nice startups.</h6>

        <div className='flex items-center justify-center flex-wrap mb-70'>
          {/* <div className="grid-teams-container" mb-70'> */}
          {Array.from(Array(5).keys()).map((loader, i) => (
            <TeamCard key={i} />
          ))}
        </div>



      </div>
    </section>
  );
};