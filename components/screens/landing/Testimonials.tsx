import React from "react";
import { TestimonialCard } from "./TestimonialCard";

interface Props {}

export const Testimonials: React.FC<Props> = () => {
  return (
    <section
      className="min-h-screen mx-auto p-30"
      style={{ maxWidth: "1200px" }}
    >
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center mt-40">
        Don’t just take our word for it,
        <br /> Here’s what our users says
      </h3>
      <p className="text-body-lg font-normal text-gray-e0e mt-10 text-center">
        Customer Testimonials
      </p>
      <div className="mt-30 grid-testimonials-container">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

const testimonials = [
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
  {
    id: "1",
    testimonial: `Truly enthralled by the idea of solving petty problems using the most obvious yet never thought of roadway. Eagerly waiting for more updates and products from their end...`,
    name: "Rhimjhim Bhadani",
    twitterHandle: "@rhimjhim",
    photo: "/images/testimonial-profile-pic-demo.png",
  },
];
