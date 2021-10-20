import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import { HiPhone } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { TiLocation } from "react-icons/ti";
import { ContactItem } from "../components/screens/contact/ContactItem";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ContactForm } from "../components/screens/contact/ContactForm";
import { urls } from "../shared/urls";
import { contactUsContents } from "../shared/contents";

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Contact Us | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className="contact-section-bg min-h-screen">
        <div className="mx-auto xl:px-30" style={{ maxWidth: "1200px" }}>
          <h1 className="text-h3 font-semibold text-white mx-auto md:text-center pt-140 mb-180 lg:mb-0 lg:mb-0 lg:py-90 md:py-80">
            {contactUsContents.coverTitle}
          </h1>

          <div className="mb-40 flex w-full overflow-hidden rounded-default bg-gray-333 md:flex-col">
            <div className="contact-cover-bg w-4/12 md:w-full rounded-default py-40 px-30 flex flex-col">
              <h5
                className="text-white font-semibold text-h5 mb-25"
                dangerouslySetInnerHTML={{ __html: contactUsContents.title }}
              />
              <p className="text-gray-f2f font-normal text-subtitle mb-30">{contactUsContents.description}</p>
              {contactLinks.map((contactLink) => (
                <ContactItem key={contactLink.id} {...contactLink} />
              ))}
              <div className="flex items-center mt-auto">
                <a className="mr-40" href={urls.DYNOPII_LINKEDIN} target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={22} className="text-white transition-all hover:text-social-linkedin" />
                </a>
                <a className="mr-40" href={urls.DYNOPII_INSTAGRAM} target="_blank" rel="noreferrer">
                  <AiOutlineInstagram size={25} className="text-white transition-all hover:text-social-instagram" />
                </a>
                <a href={urls.DYNOPII_TWITTER} target="_blank" rel="noreferrer">
                  <AiOutlineTwitter size={25} className="text-white transition-all hover:text-social-twitter" />
                </a>
              </div>
            </div>
            <div className="rounded-default p-40 sm:p-20 flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

const contactLinks = [
  // {
  //   id: "1",
  //   link: true,
  //   description: contactUsContents.phoneNumber,
  //   Icon: <HiPhone fill="#fff" size={20} />,
  // },
  {
    id: "2",
    link: true,
    href: "mailto:hello@dynopii.com",
    description: contactUsContents.email,
    Icon: <GrMail fill="#fff" size={20} />,
  },
  {
    id: "3",
    link: false,
    description: contactUsContents.addressUS,
    Icon: <TiLocation fill="#fff" size={20} />,
  },
  {
    id: "4",
    link: false,
    description: contactUsContents.addressIndia,
    Icon: <TiLocation fill="#fff" size={20} />,
  },
];
