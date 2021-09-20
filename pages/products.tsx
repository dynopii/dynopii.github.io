import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import Head from 'next/head';
import { Dhwani } from '../components/screens/products/Dhwani';

interface Props {

}

const Products: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Blogs | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='products-section-bg min-h-screen'>
        <div className='mx-auto md:px-30' style={{ maxWidth: '1200px' }}>
          <h1 className="text-h3 font-semibold text-white mx-auto" style={{ paddingTop: '180px', marginBottom: '180px' }}>Products</h1>
          <Dhwani />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
