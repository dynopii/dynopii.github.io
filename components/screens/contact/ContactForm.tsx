import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../../layout/Button';
import { InputField } from './InputField';

interface Props {

}


// Validation Schema for Contact form
const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter first name.'),
  lastName: Yup.string().required('Please enter last name.'),
  email: Yup.string().required('Please enter email.'),
  phoneNumber: Yup.string().required('Please enter phone number.'),
  message: Yup.string().required('Please enter message.'),
});


export const ContactForm: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
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
          <div className='flex justify-between md:flex-col items-center w-full'>
            <InputField error={errors.firstName} containerClasses={`mr-40 md:mr-0`} label={'First Name'} id='firstName' value={values.firstName} onChange={handleChange} />
            <InputField error={errors.lastName} containerClasses={`md:mt-20`} label={'Last Name'} id='lastName' value={values.lastName} onChange={handleChange} />
          </div>
          <div className='flex justify-between md:flex-col items-center w-full mt-40 md:mt-20'>
            <InputField error={errors.email} containerClasses={`mr-40 md:mr-0`} label={'Email'} id='email' value={values.email} onChange={handleChange} />
            <InputField error={errors.phoneNumber} containerClasses={`md:mt-20`} label={'Phone Number'} id='phoneNumber' value={values.phoneNumber} onChange={handleChange} />
          </div>
          <InputField error={errors.message} containerClasses={'mt-40 md:mt-20'} label={'Message'} id='message' value={values.message} onChange={handleChange} />
          <div className='mt-40 flex justify-end'>
            <Button disabled={isSubmitting} title='submit' type='submit' />
          </div>
        </form>
      )}
    </Formik>
  );
};
