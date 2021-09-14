import React from 'react';
import { TestimonialCard } from './TestimonialCard';

interface Props {

}

export const Testimonials: React.FC<Props> = () => {
  return (
    <section className='min-h-screen mx-auto p-30' style={{ maxWidth: '1200px' }}>
      <h3 className="text-h3 md:text-h5 font-semibold text-gray-e0e text-center mt-40">
        Don’t just take our word for it,<br /> Here’s what our users says
      </h3>
      <p className='text-body-lg font-normal text-gray-e0e mt-10 text-center'>Customer Testimonials</p>
      <div className='mt-30 grid-testimonials-container'>
        {Array.from(Array(6).keys()).map((loader, i) => (
          <TestimonialCard key={i} />
        ))}
      </div>
    </section>
  );
};
