import React from "react";
import { landingContents } from '../../../shared/contents';

interface Props { }

export const Newsletter: React.FC<Props> = () => {

  const handleSubmit = (e: any) => {
    window.open(
      `https://www.tinyletter.com/dynopii`,
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    );
    return true;
  };

  return (
    <div className="bg-gray-333 newsletter-bg rounded-default py-50 flex items-center justify-center flex-col">
      <h4 className="font-semibold text-gray-f2f text-h4 text-center">
        {landingContents.newsletter.title}
      </h4>
      <p className="text-body-lg tracking-wider text-gray-e0e font-normal text-center w-5/12 lg:w-8/12 sm:w-10/12 mt-35">
        {landingContents.newsletter.description}
      </p>

      <form
        action={`https://www.tinyletter.com/dynopii`}
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className="SignupForm"
      >

        <div className="mt-40 sm:flex-col sm:items-stretch flex items-center bg-white p-2 rounded-default w-full">
          <input
            placeholder="Enter your email address"
            aria-label="Email address"
            name="email"
            type="text"
            required
            id="tlemail"
            className="py-10 w-80 sm:w-60 xs:w-56 mr-2 sm:mr-0 px-10 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent rounded-default"
          />
          <button
            type='submit'
            className="sm:mt-10 bg-brand px-50 py-10 rounded-default text-white btn--gradient"
          >
            Subscribe
          </button>
        </div>
      </form>

    </div>
  );
};
