/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "./layout/Button";
import Link from "next/link";
import { colors, prefix } from "../shared/constants";
import { landingContents } from "../shared/contents";

const Main = () => {
  return (
    <div className="layout_content flex flex-col flex-auto">
      <div className="splash pt-40 flex justify-center w-full relative overflow-hidden">
        <div className="splash_content_container content_container text-center flex flex-col justify-center">
          <div
            className="flex flex-col justify-center"
            style={{ minHeight: "83vh" }}
          >
            <span className="animate">
              <h1 className="hero_title text-left text-h1 md:text-h3 text-white sm:text-5xl md:text-6xl">
                {landingContents.landingTitle}
              </h1>
            </span>
            <span className="animate">
              <p className="text-left hero_sub_text sm:text-2xl">
                {landingContents.landingDescription}
              </p>
            </span>
            <div className="spacer"></div>
            <div className="animate flex sm:flex-col items-start">
              <a href="mailto:hello@dynopii.com">
                <Button title={landingContents.landingBtnTextSecondary} />
              </a>
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

              <rect
                x="1054.5"
                y="79.5"
                width="1007"
                height="553"
                rx="7.5"
                className="jsx-3892812271 border"
              ></rect>
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
              src={prefix + "/images/dhwani-demo-img.png"}
              className="app_screenshot_one overflow-hidden rounded-default"
              alt="app-screenshot"
            />
            <div className="absolute" style={{ top: "40%" }}>
              <Link href={"/products/dhwani/#dhwani-demo"}>
                <a>
                  <Button uiType="primary" title="Watch Demo" type="button" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
