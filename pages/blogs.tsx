import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import Head from 'next/head';
import { BlogCard } from '../components/screens/blogs/BlogCard';
interface Props {

}

const Blogs: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Blogs | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className='blog-section-bg min-h-screen'>
        <div className='mx-auto md:px-30' style={{ maxWidth: '1200px' }}>
          <h1 className="text-h3 font-semibold text-white mx-auto" style={{ paddingTop: '180px', marginBottom: '180px' }}>Our Blogs</h1>
          <div className='flex xl:flex-col items-center justify-between md:justify-center'>
            {Array.from(Array(3).keys()).map((loader, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <div className='flex items-center mt-40 justify-center mb-70'>
            <button className='uppercase text-gray-f2f font-medium px-60 py-20 bg-brand rounded-default text-button'>Read more</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
