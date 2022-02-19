import React from "react";
import { dhwaniFeatures } from "../../../shared/staticData";
import { FeatureCard } from "./FeatureCard";
import { dhwaniCard } from "../../../shared/contents";
import { prefix } from "../../../shared/constants";

interface Props {}

export const Dhwani: React.FC<Props> = () => {
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
          src={prefix + "/svgs/dhwanilogo.svg"}
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
        <h4 className="z-1 text-h4 text-gray-f2f font-normal ml-15">Dhwani</h4>
      </div>

      <div className="p-30">
        <h6 className="text-h6 font-semibold text-gray-f2f mt-20">
          {dhwaniCard.firstSectionTitle}
        </h6>
        <p className="text-body-lg font-normal text-gray-e0e mt-30">
          {dhwaniCard.firstSectionDescription}
        </p>

        <h6 className="text-h6 font-semibold text-gray-f2f mt-30 mb-30">
          {dhwaniCard.secondSectionTitle}
        </h6>

        <div className="grid-feature-container">
          {dhwaniFeatures.map((feature) => (
            <FeatureCard size="small" key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
