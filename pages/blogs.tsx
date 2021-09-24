import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/layout/Footer';
import Head from 'next/head';
import { BlogCard } from '../components/screens/blogs/BlogCard';
import { Button } from '../components/layout/Button';
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
        <div className='mx-auto xl:px-30' style={{ maxWidth: '1200px' }}>
          <h1 className="text-h3 font-semibold text-white mx-auto md:text-center pt-140 mb-180 lg:mb-0 lg:py-90 md:py-80">Our Blogs</h1>
          <div className='flex xl:flex-col items-center justify-between md:justify-center'>
            {Array.from(Array(3).keys()).map((loader, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <div className='flex items-center mt-40 justify-center mb-70'>
            <Button title='Read more' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
