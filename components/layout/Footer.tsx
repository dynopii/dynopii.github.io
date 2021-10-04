/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className="mt-90 md:mt-50 m-30">
        <div className="bg-gray-100">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                Home
              </div>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/products"
              >
                Products <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/about"
              >
                About Us <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Pricing <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#partners"
              >
                Partners{" "}
                <span className="text-teal-600 text-xs p-1 text-brand">
                  New
                </span>
              </a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                User
              </div>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Demo{" "}
                <span className="text-teal-600 text-xs p-1 text-brand">
                  New
                </span>
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Career{" "}
                <span className="text-teal-600 text-xs p-1 text-brand">
                  We're hiring
                </span>
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Surveys{" "}
                <span className="text-teal-600 text-xs p-1 text-brand">
                  New
                </span>
              </a>
            </div>
            <div className="p-5 w-48">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                Resources
              </div>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Documentation <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Tutorials <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Support{" "}
                <span className="text-teal-600 text-xs p-1 text-brand">
                  New
                </span>
              </a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                Product
              </div>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/products/dhwani"
              >
                Dhwani <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                AI Dialer <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                Support
              </div>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Help Center <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Privacy Policy <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/#"
              >
                Conditions <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/contact"
              >
                Contact Us <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/"
              >
                Terms of Use <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="/sitemap.xml"
              >
                Sitemap <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium text-gray-444">
                Contact us
              </div>
              <p className="my-3 block text-gray-666">
                3-Floor, 7A, Bedia Danga Masjid Bari Bye Lane, LP-150/7/8/0
                Kolkata WB 700039 IN
                <span className="text-teal-600 text-xs p-1" />
              </p>
              <a
                className="my-3 block text-gray-666 hover:text-gray-f2f transition-all"
                href="mailto:hello@dynopii.com"
              >
                hello@dynopii.com <span className="text-teal-600 text-xs p-1" />
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
              Copyright © 2021 Dynopii, Inc. All rights reserved.
            </div>
            <div className=" mt-2 flex-row flex">
              <a
                href="https://in.linkedin.com/company/dynopii"
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
                href="https://www.instagram.com/dynopii"
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
                href="https://twitter.com/dynopii"
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
