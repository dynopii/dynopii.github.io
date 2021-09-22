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
          <Link href='#all-appreances'>
            <a>
              <div className='flex items-center'>
                <p className='text-body-lg text-brand font-medium mr-10'>Check out all our appearances</p>
                <BsArrowRight size={30} fill={colors.brand} />
              </div>
            </a>
          </Link>
        </div>

        {/* Large Blog Section */}
        <div className='mx-auto p-30 mb-10' style={{ maxWidth: '1200px', paddingTop: '200px' }}>
          <h3 className='font-light text-gray-e0e text-h3 mb-50'>Featured</h3>
          <div className='p-20 lg:p-30 bg-gray-333 flex items-center rounded-default lg:flex-col'>
            <div className='overflow-hidden w-7/12 lg:w-auto'>
              <img src='https://mms.digitimes.com/NewsImg/2021/0618/612267-2-YXFW0.jpg' className='object-cover rounded-default' style={{ aspectRatio: '2' }} alt='Latest Appearance' />
            </div>
            <div className='ml-20 lg:ml-0 lg:mt-20 w-5/12 lg:w-auto'>
              <h5 className='font-normal text-h5 text-white mb-15'>India's new creation Dynopii solves the pain points of language tone.</h5>
              <p className='font-normal text-body-lg text-gray-e0e'>Dynopii is a company founded by 3 young engineers, among which Anubhav Singh, the chief executive officer, studied deep learning and worked as a software innovator at Intel.</p>
              <p className='mt-35 font-normal text-gray-f2f text-body-sm'>Friday, 18th June, 2021</p>
            </div>
          </div>
        </div>

        {/* Small Blogs Section */}
        <div id='all-appreances' className='mx-auto p-30 pt-60 mb-70' style={{ maxWidth: '1200px' }}>
          <h3 className='font-light text-gray-e0e text-h3 mb-50'>All Appearances</h3>
          <div className='grid-small-blogs-container'>
            {smallBlogs.map(({ date, id, image, title, href }) => (
              <a className='h-full' key={id} href={href} target='_blank' rel='noreferrer'>
                <div className='p-20 lg:p-30 bg-gray-333 rounded-default h-full'>
                  <div className='overflow-hidden rounded-default w-80 h-40'>
                    <img className='w-full h-full object-cover' src={image} alt={`Blog - ${title}`} />
                  </div>
                  <h6 className="text-h6 font-normal text-white mt-30 mb-10">{title}</h6>
                  <p className='text-body-lg font-light text-gray-bdb'>{date}</p>
                </div>
              </a>
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
    title: `India's new creation Dynopii solves the pain points of language tone `,
    // image: '/images/media-small-1.png',
    image: 'https://mms.digitimes.com/NewsImg/2021/0618/612267-2-YXFW0.jpg',
    date: 'Jun 18, 2021',
    href: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&cat2=40&id=0000612267_7MC3DU6L53H2KA8KYXFW0&cf=AF1'
  },
  {
    id: '2',
    title: 'India AI startup Dynopii debuts speech accent changer at Computex 2021',
    // image: '/images/media-small-2.png',
    image: 'https://www.digitimes.com/newsshow/20210618PD203_files/1_b.jpg',
    date: 'Jun 18, 2021',
    href: 'https://www.digitimes.com/news/a20210618PD203.html'
  },
  {
    id: '3',
    title: 'Dynopii, Indian AI startup unveils speech accent changer: Computex 2021',
    // image: '/images/media-small-3.png',
    image: 'https://www.ncnonline.net/wp-content/uploads/2021/06/Dynopii-Indian-AI-startup-unveils-speech-accent-changer-Computex-2021-640x360.jpeg',
    date: 'June 24, 2021',
    href: 'https://www.ncnonline.net/news-in-brief/dynopii-indian-ai-startup-unveils-speech-accent-changer-computex-2021'
  },
  {
    id: '4',
    title: 'WorldAKKAM',
    // image: '/images/media-small-4.png',
    image: 'https://www.digitimes.com/newsshow/20210618PD203_files/1_b.jpg',
    date: 'Jun 18, 2020',
    href: 'https://worldakkam.com/indian-ai-startup-dynopii-debuts-voice-accent-changer-with-computex-2021/82144/'
  },
  {
    id: '5',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer  ',
    image: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/112337814_1052677161817657_2425797221960566743_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EammsFPP6EcAX95aBwC&tn=VzZnbrfpR7g2ScRE&_nc_ht=scontent.fixr3-1.fna&oh=c676e4dc00060db0b0107bdf75fa3ed2&oe=617185FF',
    date: 'Jul 16, 2021',
    href: 'https://www.facebook.com/STARTBOARD.co/posts/startup-in-asean-dynopii-an-ai-speech-accent-changer-indiaduring-the-covid-19-on/1299265520492152/'
  },
  {
    id: '6',
    title: 'Startup in ASEAN - Dynopii an AI speech accent changer ',
    image: 'https://www.digitimes.com/newsshow/20210618PD203_files/1_b.jpg',
    date: 'Jun 18, 2020',
    href: 'https://technewsnow.com/news/india-ai-startup-dynopii-debuts-speech-accent-changer-at-computex-2021'
  },
];
