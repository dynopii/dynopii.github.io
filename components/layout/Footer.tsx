/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { urls } from '../../shared/urls';
import { contactUsContents, footerContents } from '../../shared/contents';
import Link from 'next/link';

interface Props { }

export const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className="mt-90 md:mt-50 m-30">
        <div className="bg-gray-100">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            {footerContents.links.map(footerLink => (
              <div key={footerLink.id} className="p-5 w-48 ">
                <FooterLinkTitle title={footerLink.title} />
                {footerLink.subLinks.map(link => (<FooterLink key={link.id} title={link.title} href={link.href} spanText={link.spanText || ''} />))}
              </div>
            ))}
            {/* <div className="p-5 w-48 ">
              <FooterLinkTitle title='Home' />
              <FooterLink title='Products' href="/products" />
              <FooterLink title='About Us' href="/about" />
              <FooterLink title='Pricing' href="/pricing" />
              <FooterLink title='Partners' href="/partners" spanText='New' />
            </div>
            <div className="p-5 w-48 ">
              <FooterLinkTitle title='User' />
              <FooterLink title='Demo' href="/demo" spanText='New' />
              <FooterLink title='Career' href="/career" spanText={`We're hiring`} />
              <FooterLink title='Surveys' href="/surveys" spanText='New' />
            </div>
            <div className="p-5 w-48">
              <FooterLinkTitle title='Resources' />
              <FooterLink title='Documentation' href="/documentation" />
              <FooterLink title='Tutorials' href="/tutorials" />
              <FooterLink title='Support' href="/support" spanText='New' />
            </div>
            <div className="p-5 w-48 ">
              <FooterLinkTitle title='Products' />
              <FooterLink href='/products/dhwani' title='Dhwani' />
              <FooterLink href='/products/#ai-dialer' title='AI Dialer' />
            </div>
            <div className="p-5 w-48 ">
              <FooterLinkTitle title='Support' />
              <FooterLink title='Help Center' href='/help-center' />
              <FooterLink title='Privacy Policy' href='/privacy-policy' />
              <FooterLink title='Conditions' href='/conditions' />
              <FooterLink title='Contact Us' href="/contact" />
              <FooterLink title='Terms of Use' href="/terms-of-use" />
              <FooterLink title='Sitemap' href="/sitemap.xml" />
            </div> */}
            <div className="p-5 w-48 ">
              <FooterLinkTitle title='Contact us' />
              <p className="my-3 block text-gray-666">
                {contactUsContents.address}
                <span className="text-teal-600 text-xs p-1" />
              </p>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href={`mailto:${contactUsContents.email}`}
              >
                {contactUsContents.email} <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 pt-2 ">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t  text-gray-333 text-sm justify-between
      md:flex-row max-w-6xl pt-20 mb-20 items-center"
          >
            <div className="mt-2 text-gray-666">
              {footerContents.copyright}
            </div>
            <div className=" mt-2 flex-row flex">
              <a
                href={urls.DYNOPII_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="transition-all mr-30"
              >
                <FaLinkedinIn
                  className="text-white transition-all hover:text-social-linkedin"
                  size={16}
                />
              </a>
              <a
                href={urls.DYNOPII_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="transition-all mr-30"
              >
                <AiOutlineInstagram
                  className="text-white transition-all hover:text-social-instagram"
                  size={18}
                />
              </a>
              <a
                href={urls.DYNOPII_TWITTER}
                target="_blank"
                rel="noreferrer"
                className="transition-all"
              >
                <AiOutlineTwitter
                  className="text-white transition-all hover:text-social-twitter"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

type FooterLinkProps = {
  href: string,
  title: string,
  spanText?: string,
  inDOM?: boolean;
};

export const FooterLink: React.FC<FooterLinkProps> = ({ href, title, spanText = '', inDOM = true }) => {
  return (
    <>
      {
        inDOM
          ? <>
            <Link href={href}><a className="my-3 block text-gray-666 hover:text-gray-f2f transition-all">{title} <span className="text-teal-600 text-xs p-1 text-brand">{spanText || ''}</span></a></Link>
          </>
          : <a
            className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
            href={href}
          >
            {title} <span className="text-teal-600 text-xs p-1 text-brand">{spanText || ''}</span>
          </a>
      }
    </>
  );
};

export const FooterLinkTitle: React.FC<{ title: string; }> = ({ title }) => {
  return (
    <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
      {title}
    </div>
  );
};

