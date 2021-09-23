import React from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import { HiPhone } from "react-icons/hi";
import { GrMail } from 'react-icons/gr';
import { TiLocation } from 'react-icons/ti';
import { ContactItem } from '../components/screens/contact/ContactItem';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { ContactForm } from '../components/screens/contact/ContactForm';


interface Props {

}

const Contact: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Contact Us | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='contact-section-bg min-h-screen'>
        <div className='mx-auto xl:px-30' style={{ maxWidth: '1200px' }}>
          <h1 className="text-h3 font-semibold text-white mx-auto" style={{ paddingTop: '140px', marginBottom: '180px' }}>Contact Us</h1>

          <div className='mb-40 flex w-full overflow-hidden rounded-default bg-gray-333 md:flex-col'>
            <div className='contact-cover-bg w-4/12 md:w-full rounded-default py-40 px-30 flex flex-col'>
              <h5 className='text-white font-semibold text-h5 mb-25'>Contact<br /> Information</h5>
              <p className='text-gray-f2f font-normal text-subtitle mb-30'>Fill up the form and our Team will get back to you within 24 hours.</p>
              {
                contactLinks.map((contactLink) => (
                  <ContactItem key={contactLink.id} {...contactLink} />
                ))
              }
              <div className='flex items-center mt-auto'>
                <a className='mr-40' href='https://in.linkedin.com/company/dynopii' target='_blank' rel="noreferrer"><FaLinkedinIn size={22} color='#ffffff' /></a>
                <a className='mr-40' href='https://www.instagram.com/dynopii' target='_blank' rel="noreferrer"><AiOutlineInstagram size={25} color='#ffffff' /></a>
                <a href='https://twitter.com/dynopii' target='_blank' rel="noreferrer"><AiOutlineTwitter size={25} color='#ffffff' /></a>
              </div>
            </div>
            <div className='rounded-default p-40 flex-1'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

const contactLinks = [
  {
    id: '1',
    link: true,
    description: '+91 1234567890',
    Icon: <HiPhone fill='#fff' size={20} />
  },
  {
    id: '2',
    link: true,
    description: 'hello@dynopii.com',
    Icon: <GrMail fill='#fff' size={20} />
  },
  {
    id: '3',
    link: true,
    description: '3-FLOOR, 7A, BEDIA DANGA MASJID BARI BYE LANE, LP-150/7/8/0 KOLKATA Kolkata WB 700039 IN',
    Icon: <TiLocation fill='#fff' size={20} />
  },
];
