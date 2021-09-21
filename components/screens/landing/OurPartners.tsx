import React from 'react';

interface Props {

}

export const OurPartners: React.FC<Props> = () => {
  return (
    <div>
      <h3 className="text-h3 md:text-h5 font-semibold text-gray-e0e text-center mt-40">
        Our Partners
      </h3>
      <div className='flex flex-wrap items-center justify-around mt-50'>
        {Array.from(Array(5).keys()).map((loader, i) => (
          <div key={i}>
            <div className='w-48 h-48 overflow-hidden rounded-default'>
              <img src='/images/team-demo-pic.png' className='w-full h-fill object-cover' alt='Partners' />
            </div>
            <h5 className='text-center text-h5 text-gray-f2f font-semibold mt-25'>Julia DeWahi</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
