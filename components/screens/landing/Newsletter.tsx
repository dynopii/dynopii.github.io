import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../layout/Button';

interface Props {

}



// Validation Schema for Newsletter form
const ValidationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter email.'),
});


export const Newsletter: React.FC<Props> = () => {

  return (
    <div className='bg-gray-333 newsletter-bg rounded-default py-50 flex items-center justify-center flex-col'>
      <h4 className='font-semibold text-gray-f2f text-h4'>Subscribe to our Blog</h4>
      <p className='text-body-lg tracking-wider text-gray-e0e font-normal text-center w-5/12 mt-35'>Get latest product updates, resources, curated content delivered straight in your inbox. Be the first to learn the news about new features and product updates</p>

      <Formik
        initialValues={{
          email: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          setTimeout(() => {
            alert(JSON.stringify(values, undefined, 2));
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className='mt-40 flex items-center bg-white p-2 rounded-default'>
              <input id='email' placeholder='Enter your email address' value={values.email} onChange={handleChange} className='py-10 w-80 mr-2 px-10 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent rounded-default' />
              <button className='bg-brand px-50 py-10 rounded-default text-white'>Subscribe</button>
            </div>
          </form>
        )}
      </Formik>

    </div>
  );
};
