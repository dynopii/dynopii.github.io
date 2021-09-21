import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/layout/Footer';
import Head from 'next/head';
import Image from 'next/image';
import DhwaniSVG from '../../public/svgs/dhwanilogo.svg';
import { FeatureCard } from '../../components/screens/products/FeatureCard';
import { featuresBig } from '../../shared/staticData';
import { PlayButton } from '../../components/SVGs';
import { SiGooglehangoutsmeet } from 'react-icons/si';
import { SiMicrosoftteams } from 'react-icons/si';
import { TiSocialSkype } from 'react-icons/ti';
import { FaSlack } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { ZoomSVG } from '../../components/SVGs';
interface Props {

}

const Dhwani: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Dhwani | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='dhwani-page-bg min-h-screen'>
        <div className='mx-auto md:px-30' style={{ maxWidth: '1200px' }}>
          <h1 className="text-h3 font-semibold text-white mx-auto" style={{ paddingTop: '180px', marginBottom: '180px' }}>Dhwani</h1>

          {/* Dhwani Introduction Section */}
          <div className='flex items-center justify-center flex-col py-40'>
            <Image src={DhwaniSVG} alt="logo" width={203} height={203} />
            <h2 className='text-h2 text-white font-semibold mb-35'>Introducing <span className='text-brand'>Dhwani</span></h2>
            <h4 className='text-h4 text-gray-f2f font-semibold w-8/12 text-center'>The goal of dhwani is to simplify the pain points of a solution center.</h4>
          </div>

          {/* Dhwani Features Section */}
          <div className='pt-40'>
            <h3 className='text-h3 text-gray-e0e font-semibold mb-50 mt-70 text-center'>A possibility explored like never before.</h3>
            <div className='grid-feature-container' style={{ gridGap: 40 }}>
              {featuresBig.map((feature) => (
                <FeatureCard size='large' key={feature.id} {...feature} />
              ))}
            </div>
          </div>

        </div>

        {/* Demo Section */}
        <div className='min-h-screen flex items-center justify-center relative' style={{ background: `linear-gradient(180deg, #222222 0%, #000000 29.5%, #000000 75.33%, #222222 100%)` }}>
          <div className='w-5/12'>
            <img src='/images/dhwani-demo.png' className='w-full h-full object-cover' alt='Dhwani Demo' />
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <a href='https://www.youtube.com/watch?v=P-chJcva8ME' target='_blank' rel='noreferrer'>
              <PlayButton />
            </a>
          </div>
        </div>

        <div className='mx-auto md:px-30' style={{ maxWidth: '1200px' }}>
          {/* Integrated with tools section */}
          <div className='py-90'>
            <h3 className='text-gray-e0e text-h3 text-center font-semibold mb-70'>Integrated with your tools</h3>
            <div className='flex items-center justify-between flex-wrap max-w-xl mx-auto'>
              <SiGooglehangoutsmeet fill={'#ffffff'} size={80} />
              <SiMicrosoftteams fill={'#ffffff'} size={80} />
              <TiSocialSkype fill={'#ffffff'} size={80} />
            </div>
            <div className='flex items-center justify-between flex-wrap max-w-3xl mx-auto mt-30'>
              <ZoomSVG />
              <FaSlack fill={'#ffffff'} size={80} />
              <FaDiscord fill={'#ffffff'} size={80} />
            </div>
          </div>

          {/* Focus on Your Sales Section */}
          <div className='min-h-screen flex items-center justify-center flex-col'>
            <h1 className='text-h1 font-semibold text-gray-f2f mb-70'>Focus on your sales, not accent!</h1>
            <h3 className='text-h3 font-normal text-gray-e0e'>Let our trained models ease your work. Introducing AI based solutions. See the impossible become reality.</h3>
          </div>

          {/* Pricing */}
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default Dhwani;
