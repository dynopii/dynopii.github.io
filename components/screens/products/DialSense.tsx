import React from "react";
import { dialsenseFeatures } from "../../../shared/staticData";
import { FeatureCard } from "./FeatureCard";
import { dhwaniCard, dialsenseCard } from "../../../shared/contents";
import { prefix } from "../../../shared/constants";

interface Props {}

export const DialSense: React.FC<Props> = () => {
  return (
    <div className="bg-gray-333 rounded-default overflow-hidden">
      <div
        className="dhwani-cover-bg h-96 flex items-center justify-center overflow-hidden relative"
        // style={{
        //   background: "no-repeat,linear-gradient(270deg,#9121c2,#ff5e5e)",
        // }}
      >
        <img
          className="z-1"
          src={prefix + "/svgs/dialsense.svg"}
          alt="logo"
          width={115}
          height={115}
        />
        {/* <Image
          className="z-1"
          src={DhwaniSVG}
          alt="logo"
          width={115}
          height={115}
        /> */}
        <h4 className="z-1 text-h4 text-gray-f2f font-normal ml-15">
          Dial Sense
        </h4>
        {/* <div className="absolute inset-0">
          <Exp />
        </div> */}
      </div>

      <div className="p-30">
        <h6 className="text-h6 font-semibold text-gray-f2f mt-20">
          {dialsenseCard.firstSectionTitle}
        </h6>
        <p className="text-body-lg font-normal text-gray-e0e mt-30">
          {dialsenseCard.firstSectionDescription}
        </p>

        <h6 className="text-h6 font-semibold text-gray-f2f mt-30 mb-30">
          {dialsenseCard.secondSectionTitle}
        </h6>

        <div className="grid-feature-container">
          {dialsenseFeatures.map((feature) => (
            <FeatureCard size="small" key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
