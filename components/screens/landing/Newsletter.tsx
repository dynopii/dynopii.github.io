import React, { useState } from "react";
import * as Yup from "yup";
import { landingContents } from '../../../shared/contents';

interface Props { }

// Validation Schema for Newsletter form
const ValidationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter email."),
});

export const Newsletter: React.FC<Props> = () => {
  const [input, setInput] = useState('');


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

      {/* <Formik
        initialValues={{
          email: "",
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // setTimeout(async () => {
          //   try {
          //     const { data }: any = await axios({
          //       url: 'https://formspree.io/f/xdopdwyy',
          //       method: 'POST',
          //       data: values
          //     });
          //     if (data.ok) {
          //       resetForm({});
          //       toast('Successfully subscribed.', { type: 'success' });
          //     }
          //   } catch (e) {
          //     // console.log(e);
          //     toast('Error, Please try again later.', { type: 'error' });
          //   }
          //   setSubmitting(false);
          // }, 100);
          window.open(
            `https://www.tinyletter.com/dynopii`,
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          );
          setSubmitting(false);
          // return true;
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
           

            <div className="mt-40 sm:flex-col sm:items-stretch flex items-center bg-white p-2 rounded-default w-full">
              <input
                id="email"
                placeholder="Enter your email address"
                value={values.email}
                type='email'
                required={true}
                onChange={handleChange}
                className="py-10 w-80 sm:w-60 xs:w-56 mr-2 sm:mr-0 px-10 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent rounded-default"
              />
              <button
                disabled={isSubmitting}
                type='submit'
                className="sm:mt-10 bg-brand px-50 py-10 rounded-default text-white btn--gradient"
              >
                Subscribe
              </button>
            </div>

          </form>
        )}
        </Formik> */}

      <form
        action={`https://www.tinyletter.com/dynopii`}
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className="SignupForm"
      >

        <div className="mt-40 sm:flex-col sm:items-stretch flex items-center bg-white p-2 rounded-default w-full">
          <input
            // id="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            // placeholder="Enter your email..."
            name="email"
            type="text"
            required
            id="tlemail"
            className="py-10 w-80 sm:w-60 xs:w-56 mr-2 sm:mr-0 px-10 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent rounded-default"
          />
          <button
            // disabled={isSubmitting}
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
