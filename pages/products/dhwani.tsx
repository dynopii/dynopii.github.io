import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/layout/Footer';
import Head from 'next/head';
import Image from 'next/image';
import DhwaniSVG from '../../public/svgs/dhwanilogo.svg';

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

          <div className='flex items-center justify-center flex-col'>
            <Image src={DhwaniSVG} alt="logo" width={203} height={203} />
            <h2 className='text-h2 text-white font-semibold'>Introducing <span className='text-brand'>Dhwani</span></h2>
            <h4 className='text-h4 text-gray-f2f font-semibold'>The goal of dhwani is to simplify the pain points of a solution center.</h4>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dhwani;
