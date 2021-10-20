import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import { colors } from "../shared/constants";
import Link from "next/link";
import { mediaContents, smallBlogs } from "../shared/contents";

interface Props {}

const Media: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Media | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className="media-section-bg min-h-screen">
        <div className="mx-auto px-30 pt-140" style={{ maxWidth: "1200px" }}>
          <h3 className="text-white font-semibold text-h3 mb-30">{mediaContents.title}</h3>
          <h6 className="text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12">
            {mediaContents.upperParagraph}
          </h6>
          <h6 className="text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12 sm:w-10/12">
            {mediaContents.lowerParagraph}
          </h6>
          <Link href={mediaContents.link.href}>
            <a>
              <div className="flex items-center">
                <p className="text-body-lg text-brand font-medium mr-10">{mediaContents.link.title}</p>
                <BsArrowRight size={22} fill={colors.brand} />
              </div>
            </a>
          </Link>
        </div>

        {/* Large Blog Section */}
        <a href={mediaContents.featured.href} target="_blank" rel="noreferrer">
          <div className="mx-auto p-30 mb-10" style={{ maxWidth: "1200px", paddingTop: "200px" }}>
            <h3 className="font-light text-gray-e0e text-h3 mb-50">{mediaContents.featured.title}</h3>
            <div className="p-20 lg:p-30 bg-gray-333 hover:bg-gray-444 transition-all flex items-center rounded-default lg:flex-col">
              <div className="overflow-hidden w-7/12 lg:w-auto">
                <img
                  src={mediaContents.featured.photo}
                  className="object-cover rounded-default"
                  style={{ aspectRatio: "2" }}
                  alt={mediaContents.featured.title}
                />
              </div>
              <div className="ml-20 lg:ml-0 lg:mt-20 w-5/12 lg:w-auto">
                <h5 className="font-normal text-h5 text-white mb-15">{mediaContents.featured.blogTitle}</h5>
                <p className="font-normal text-body-lg text-gray-e0e">{mediaContents.featured.description}</p>
                <p className="mt-35 font-normal text-gray-f2f text-body-sm">{mediaContents.featured.publishedAt}</p>
              </div>
            </div>
          </div>
        </a>

        {/* Small Blogs Section */}
        <div id="all-appreances" className="mx-auto p-30 pt-60 mb-70" style={{ maxWidth: "1200px" }}>
          <h3 className="font-light text-gray-e0e text-h3 mb-50">{mediaContents.allAppearances.title}</h3>
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
