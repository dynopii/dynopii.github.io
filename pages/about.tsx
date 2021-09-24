import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import Head from 'next/head';
import { BsArrowRight } from "react-icons/bs";
import { colors } from '../shared/constants';
import Link from 'next/link';
import { OurTeam } from '../components/screens/about/OurTeam';
import { StrategicPartners } from '../components/screens/about/StrategicPartners';

interface Props {

}

const About: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>About Us | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='about-us-section-bg min-h-screen'>
        <div className='mx-auto xl:px-30 pt-140 sm:pt-90' style={{ maxWidth: '1200px'}}>
          <h3 className="text-white font-semibold text-h3 mb-30">The magic of sound.</h3>
          <h6 className='text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12'>Create effortless & personalized customer experiences with the best in class AI-powered digital and voice automation.</h6>
          <h6 className='text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12 sm:w-10/12'>Our vision is to make it simple for consumers to do business with you by redefining.</h6>
          <Link href='#our-team'>
            <a>
              <div className='flex items-center'>
                <p className='text-body-lg text-brand font-medium mr-10'>Read more about us</p>
                <BsArrowRight size={30} fill={colors.brand} />
              </div>
            </a>
          </Link>
        </div>
        <OurTeam />
        <StrategicPartners />
      </section>
      <Footer />
    </div>
  );
};

export default About;
