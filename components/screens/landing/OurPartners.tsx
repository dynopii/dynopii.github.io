import React from 'react';

interface Props {

}

export const OurPartners: React.FC<Props> = () => {
  return (
    <div>
      <h3 className="text-h3 font-semibold text-gray-e0e text-center mt-40">
        Our Partners
      </h3>
      <div className='flex flex-wrap items-center justify-around mt-30'>
        {strategicPartners.map((partner, i) => (
          <div key={i} className='mt-20'>
            <div className='w-48 h-48 overflow-hidden rounded-default'>
              <img src={partner.photo} className='w-full h-fill object-cover' alt={`${partner.name} photo`} />
            </div>
            <h5 className='text-center text-h5 text-gray-f2f font-semibold mt-25'>{partner.name} </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const strategicPartners = [
	{
		id: '1',
		name: 'Julia DeWahl',
		photo: '/images/team-demo-pic.png',
	},
	{
		id: '2',
		name: 'Julia DeWahl',
		photo: '/images/team-demo-pic.png',
	},
	{
		id: '3',
		name: 'Julia DeWahl',
		photo: '/images/team-demo-pic.png',
	},
	{
		id: '4',
		name: 'Julia DeWahl',
		photo: '/images/team-demo-pic.png',
	},
];
