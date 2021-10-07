import React from "react";
import { landingContents, testimonials } from '../../../shared/contents';
import { TestimonialCard } from "./TestimonialCard";

interface Props { }

export const Testimonials: React.FC<Props> = () => {
  return (
    <section
      className="mx-auto p-30"
      style={{ maxWidth: "1200px" }}
    >
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center mt-40" dangerouslySetInnerHTML={{ __html: landingContents.testimonialsSection.titleHTML }} />
      <p className="text-body-lg font-normal text-gray-e0e mt-10 text-center">
        {landingContents.testimonialsSection.subtitle}
      </p>
      <div className="mt-30 grid-testimonials-container">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
