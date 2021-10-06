import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Button } from '../../layout/Button';
import { InputField } from './InputField';

interface Props {

}


// Validation Schema for Contact form
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required.'),
  subject: Yup.string().required('Subject is required.'),
  email: Yup.string().required('Email is required.').email('Please enter a valid email'),
  phone: Yup.string().required('Phone number is required.').min(10, 'Phone number must be of minimum 10 digits.'),
  message: Yup.string().required('Message is required.'),
});


export const ContactForm: React.FC<Props> = () => {

  return (
    <Formik
      initialValues={{
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
      }}
      validateOnBlur={false}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(async () => {
          try {
            const { data }: any = await axios({
              url: 'https://formspree.io/f/xeqpbjoy',
              method: 'POST',
              data: values
            });
            if (data.ok) {
              resetForm({});
              toast('Successfully submitted.', { type: 'success' });
            }
          } catch (e) {
            // console.log(e);
            toast('Error, Please try again later.', { type: 'error' });
          }
          setSubmitting(false);
        }, 100);
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className='flex justify-between md:flex-col items-center w-full'>
            <InputField error={errors.name} containerClasses={`mr-40 md:mr-0`} label={'Full Name'} id='name' value={values.name} onChange={handleChange} />
            <InputField error={errors.subject} containerClasses={`md:mt-20`} label={'Subject'} id='subject' value={values.subject} onChange={handleChange} />
          </div>
          <div className='flex justify-between md:flex-col items-center w-full mt-40 md:mt-20'>
            <InputField error={errors.email} inputType='email' containerClasses={`mr-40 md:mr-0`} label={'Email'} id='email' value={values.email} onChange={handleChange} />
            <InputField error={errors.phone} inputType='number' containerClasses={`md:mt-20`} label={'Phone Number'} id='phone' value={values.phone} onChange={handleChange} />
          </div>
          <InputField textArea error={errors.message} containerClasses={'mt-40 md:mt-20'} label={'Message'} id='message' value={values.message} onChange={handleChange} />
          <div className='mt-40 sm:mt-20 flex justify-end'>
            <Button disabled={isSubmitting} title='submit' type='submit' />
          </div>
        </form>
      )}
    </Formik>
  );
};
