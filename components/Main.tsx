/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import DhwaniSVG from "../public/svgs/dhwanilogo.svg";
import { Button } from "./layout/Button";
import Link from "next/link";
import { colors } from "../shared/constants";
import { contactUsContents, landingContents } from '../shared/contents';

export const Main = () => {
  return (
    <div className="layout_content flex flex-col flex-auto">
      <div className="splash pt-40 sm:pt-20 flex justify-center w-full relative overflow-hidden">
        <div className="splash_content_container content_container text-center flex flex-col justify-center items-center">
          <div className="splash_banner_animate">
            <div className="splash_banner mb-12">
              <Link href="/products/dhwani">
                <a className="banner_container">
                  <div className="gradient_background"></div>
                  <div className="banner_container_content bg-gray-222 rounded-default px-10 py-10 z-1 border-4 border-transparent flex flex-row items-center justify-center sm:flex-col sm:py-3 sm:px-4">
                    <Image src={DhwaniSVG} alt="logo" width={40} height={40} />
                    <div className="flex ml-6 sm:m-0 flex-grow">
                      <span className="text-white text-body-lg sm:mt-3 sm:ml-0">
                        Latest Product Release &mdash; Dhwani
                      </span>
                    </div>
                    <span className="ml-6 title_separator sm:hidden">|</span>
                    <span className="ml-6 sm:ml-0 sm:mt-3 text-body-lg text-brand font-medium">
                      Read more →
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <span className="animate">
            {/* <h1 className="hero_title text-white sm:text-5xl md:text-6xl"> */}
            <h1 className="text-h1 font-semibold text-white sm:text-5xl md:text-6xl">
              Redefining the way you communicate
            </h1>
          </span>
          <span className="animate">
            <p className="text-h6 text-gray-e0e font-light mt-10 mb-10">
              Effectivate communication is not easy. We help you provide unique personalized communication to your customers helping them understand your business better. Never before in the industry and surely nowhere else.
            </p>
          </span>
          <div className="spacer"></div>
          <div className="animate flex items-center justify-center md:flex-col">
            {/* <button type="submit" className="signup_btn">
							Sign up for free →
						</button> */}
            <a href="mailto:hello@dynopii.com">
              <Button title="Schedule demo" />
            </a>
            <a href="mailto:hello@dynopii.com">
              <div className="ml-20 md:ml-0 md:mt-20">
                <Button title="Contact Sales" uiType="outlined" />
              </div>
            </a>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
};

const Main2 = () => {
  return (
    <div className="layout_content flex flex-col flex-auto">
      <div
        className="splash pt-40 flex justify-center w-full relative overflow-hidden"
      >
        <div
          className="splash_content_container content_container text-center flex flex-col justify-center items-center"
        >
          <div
            className="flex flex-col justify-center items-center"
            style={{ minHeight: "83vh" }}
          >
            <div className="splash_banner_animate">
              {/* <div className="splash_banner mb-12">
                <Link href="/products/dhwani">
                  <a className="banner_container transform hover:scale-105 transition-all">
                    <div className="gradient_background"></div>
                    <div
                      className="
                      banner_container_content
                      flex flex-row
                      items-center
                      justify-center
                      sm:flex-col sm:py-3 sm:px-4
                    "
                    >
                      <Image
                        src={DhwaniSVG}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                      <div className="flex ml-6 sm:m-0 flex-grow">
                        <span
                          color="labelTitle"
                          className="banner_title sm:mt-3 sm:ml-0"
                        >
                          Upcoming Release: Dhwani
                        </span>
                      </div>
                      <span
                        color="labelFaint"
                        className="ml-6 title_separator sm:hidden"
                      >
                        |
                      </span>
                      <span className="ml-6 sm:ml-0 sm:mt-3 text-brand">
                        Read more →
                      </span>
                    </div>
                  </a>
                </Link>
              </div> */}
            </div>
            <span className="animate">
              <h1 className="hero_title text-h1 md:text-h3 text-white sm:text-5xl md:text-6xl">
                {landingContents.landingTitle}
              </h1>
            </span>
            <span className="animate">
              <p className="hero_sub_text sm:text-2xl">
                {landingContents.landingDescription}
              </p>
            </span>
            <div className="spacer"></div>
            <div className="animate flex sm:flex-col items-center justify-center">
              <a href="mailto:hello@dynopii.com">
                <Button title={landingContents.landingBtnTextPrimary} />
                {/* <button type="submit" className="signup_btn">
                  Sign up for free →
                </button> */}
              </a>
              <div className="ml-30 sm:ml-0 sm:mt-30">
                <a href={`mailto:${contactUsContents.email}`}>
                  <Button uiType="outlined" title={landingContents.landingBtnTextSecondary}></Button>
                </a>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="image_container animate">
            <div className="glow"></div>
            <svg
              width="3120"
              height="761"
              viewBox="0 0 3120 761"
              fill="none"
              stroke={colors.brand}
              xmlns="http://www.w3.org/2000/svg"
              className="hero_svg"
            >
              <line
                y1="0.5"
                x2="3120"
                y2="0.5"
                className="jsx-3892812271"
              ></line>
              <line
                y1="77.5"
                x2="3120"
                y2="77.5"
                className="jsx-3892812271"
              ></line>
              <line
                y1="690.5"
                x2="3120"
                y2="690.5"
                className="jsx-3892812271"
              ></line>
              <line
                y1="632.5"
                x2="3120"
                y2="632.5"
                className="jsx-3892812271"
              ></line>
              <line
                x1="1036.5"
                y1="1"
                x2="1036.5"
                y2="691"
                className="jsx-3892812271"
              ></line>
              <line
                x1="2076.5"
                y1="1"
                x2="2076.5"
                y2="691"
                className="jsx-3892812271"
              ></line>

              {/* <rect
								x="1036.5"
								y="79.5"
								width="1040"
								height="553"
								rx="7.5"
								className="jsx-3892812271 border"
							></rect> */}

              <rect
                x="1054.5"
                y="79.5"
                width="1007"
                height="553"
                rx="7.5"
                className="jsx-3892812271 border"
              ></rect>
              {/* <rect
								x="1040.5"
								y="83.5"
								width="1031"
								height="545"
								rx="3.5"
								className="jsx-3892812271 border"
							></rect> */}
              <rect
                x="1059"
                y="83.5"
                width="998"
                height="545"
                rx="3.5"
                className="jsx-3892812271 border"
              ></rect>

              <line
                x1="1225.5"
                y1="83.0009"
                x2="1225.5"
                y2="628.001"
                className="jsx-3892812271"
              ></line>

              <rect
                x="1181.5"
                y="108"
                width="15"
                height="15"
                rx="7.5"
                className="jsx-3892812271 ui"
              ></rect>
            </svg>
            <img
              src={"/images/dhwani-demo-img.png"}
              className="app_screenshot_one overflow-hidden rounded-default"
              alt="app-screenshot"
            />
            {/* <img src={'/screenshot.jpeg'} className="app_screenshot_one" alt="app-screenshot" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
