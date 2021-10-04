import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import { colors } from "../shared/constants";
import Link from "next/link";
import { smallBlogs } from '../shared/contents';

interface Props { }

const Media: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Media | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className="media-section-bg min-h-screen">
        <div className="mx-auto xl:px-30 pt-140" style={{ maxWidth: "1200px" }}>
          <h3 className="text-white font-semibold text-h3 mb-30">Media Appearance</h3>
          <h6 className="text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12">
            Create effortless & personalized customer experiences with the best in class AI-powered digital and voice
            automation.
          </h6>
          <h6 className="text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12 sm:w-10/12">
            Our vision is to make it simple for consumers to do business with you by redefining.
          </h6>
          <Link href="#all-appreances">
            <a>
              <div className="flex items-center">
                <p className="text-body-lg text-brand font-medium mr-10">Check out all our appearances</p>
                <BsArrowRight size={30} fill={colors.brand} />
              </div>
            </a>
          </Link>
        </div>

        {/* Large Blog Section */}
        <a
          href="https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&cat2=40&id=0000612267_7MC3DU6L53H2KA8KYXFW0&cf=AF1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mx-auto p-30 mb-10" style={{ maxWidth: "1200px", paddingTop: "200px" }}>
            <h3 className="font-light text-gray-e0e text-h3 mb-50">Featured</h3>
            <div className="p-20 lg:p-30 bg-gray-333 hover:bg-gray-444 transition-all flex items-center rounded-default lg:flex-col">
              <div className="overflow-hidden w-7/12 lg:w-auto">
                <img
                  src="https://mms.digitimes.com/NewsImg/2021/0618/612267-2-YXFW0.jpg"
                  className="object-cover rounded-default"
                  style={{ aspectRatio: "2" }}
                  alt="Latest Appearance"
                />
              </div>
              <div className="ml-20 lg:ml-0 lg:mt-20 w-5/12 lg:w-auto">
                <h5 className="font-normal text-h5 text-white mb-15">
                  India's new creation Dynopii solves the pain points of language tone.
                </h5>
                <p className="font-normal text-body-lg text-gray-e0e">
                  Dynopii is a company founded by 3 young engineers, among which Anubhav Singh, the chief executive
                  officer, studied deep learning and worked as a software innovator at Intel.
                </p>
                <p className="mt-35 font-normal text-gray-f2f text-body-sm">Friday, 18th June, 2021</p>
              </div>
            </div>
          </div>
        </a>

        {/* Small Blogs Section */}
        <div id="all-appreances" className="mx-auto p-30 pt-60 mb-70" style={{ maxWidth: "1200px" }}>
          <h3 className="font-light text-gray-e0e text-h3 mb-50">All Appearances</h3>
          <div className="grid-small-blogs-container">
            {smallBlogs.map(({ date, id, image, title, href }) => (
              <a className="h-full" key={id} href={href} target="_blank" rel="noreferrer">
                <div className="p-20 lg:p-30 bg-gray-333 hover:bg-gray-444 transition-all rounded-default h-full">
                  <div className="overflow-hidden rounded-default w-full h-40 md:h-auto">
                    {" "}
                    {/*w-80 h-40*/}
                    <img className="w-full h-full object-cover" src={image} alt={`Blog - ${title}`} />
                  </div>
                  <h6 className="text-h6 font-normal text-white mt-30 mb-10">{title}</h6>
                  <p className="text-body-lg font-light text-gray-bdb">{date}</p>
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

