import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import Head from 'next/head';
import { BsArrowRight } from 'react-icons/bs';
import { colors } from '../shared/constants';
import Link from 'next/link';

interface Props {

}

const Media: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Media | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='media-section-bg min-h-screen'>
        <div className='mx-auto md:px-30' style={{ maxWidth: '1200px', paddingTop: '140px' }}>
          <h3 className="text-white font-semibold text-h3 mb-30">Media Appearance</h3>
          <h6 className='text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12'>Create effortless & personalized customer experiences with the best in class AI-powered digital and voice automation.</h6>
          <h6 className='text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12'>Our vision is to make it simple for consumers to do business with you by redefining.</h6>
          <Link href='/'>
            <a>
              <div className='flex items-center'>
                <p className='text-body-lg text-brand font-medium mr-10'>Check out all our appearances</p>
                <BsArrowRight size={30} fill={colors.brand} />
              </div>
            </a>
          </Link>
        </div>

        {/* Large Blog Section */}
        <div className='mx-auto p-30 mb-50' style={{ maxWidth: '1200px', paddingTop: '200px' }}>
          <h3 className='font-light text-gray-e0e text-h3 mb-50'>Latest Appearance</h3>
          <div className='p-20 lg:p-30 bg-gray-333 flex items-center rounded-default lg:flex-col'>
            <div className='overflow-hidden w-7/12 lg:w-auto'>
              <img src='/images/media-big-pic-demo.png' className='' />
            </div>
            <div className='ml-20 lg:ml-0 lg:mt-20 w-5/12 lg:w-auto'>
              <h5 className='font-normal text-h5 text-white mb-15'>India AI startup Dynopii debuts speech accent changer at Computex 2021</h5>
              <p className='font-normal text-body-lg text-gray-e0e'>India-based AI startup Dynopii is showing a real-time speech accent changer at the ongoing virtual Computex Taipei 2021, aiming to help solution centers address the pain points of communicating with customers carrying different accents.</p>
              <p className='mt-35 font-normal text-gray-f2f text-body-sm'>Friday, 18th June, 2021</p>
            </div>
          </div>
        </div>

        {/* Small Blogs Section */}
        <div className='mx-auto p-30 mb-70' style={{ maxWidth: '1200px' }}>
          <h3 className='font-light text-gray-e0e text-h3 mb-50'>All Appearance</h3>
          <div className='grid-small-blogs-container'>
            {smallBlogs.map(({ date, id, image, title }) => (
              <div key={id} className='p-20 lg:p-30 bg-gray-333 rounded-default'>
                <div className='overflow-hidden rounded-default'>
                  <img className='w-full h-full' src={image} alt={`Blog - ${title}`} />
                </div>
                <h6 className="text-h6 font-normal text-white mt-30 mb-10">{title}</h6>
                <p className='text-body-lg font-light text-gray-bdb'>{date}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default Media;

const smallBlogs = [
  {
    id: '1',
    title: 'India-based AI startup Dynopii. Aims',
    image: '/images/media-small-1.png',
    date: 'Aug 14, 2020'
  },
  {
    id: '2',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: '/images/media-small-2.png',
    date: 'Aug 14, 2020'
  },
  {
    id: '3',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: '/images/media-small-3.png',
    date: 'Aug 14, 2020'
  },
  {
    id: '4',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: '/images/media-small-4.png',
    date: 'Aug 14, 2020'
  },
  {
    id: '5',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: '/images/media-small-5.png',
    date: 'Aug 14, 2020'
  },
  {
    id: '6',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: '/images/media-small-6.png',
    date: 'Aug 14, 2020'
  },
];
