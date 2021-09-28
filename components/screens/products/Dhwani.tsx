import React from "react";
import { features } from "../../../shared/staticData";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import DhwaniSVG from "../../../public/svgs/dhwanilogo.svg";
interface Props {}

export const Dhwani: React.FC<Props> = () => {
  return (
    <div className="bg-gray-333 rounded-default">
      <div className="dhwani-cover-bg h-96 p-30 flex items-center justify-center">
        {/* <Image src={DhwaniSVG} alt="logo" width={115} height={115} />
        <h4 className="text-h4 text-gray-f2f font-normal ml-15">Dhwani</h4> */}
      </div>

      <div className="p-30">
        <h6 className="text-h6 font-semibold text-gray-f2f mt-20">Overview</h6>
        <p className="text-body-lg font-normal text-gray-e0e mt-30">
          Create effortless & personalized customer experiences with the best in
          class AI-powered digital and voice automation. Our vision is to make
          it simple for consumers to do business with you by redefining how
          artificial intelligence and human insight enable personalized,
          predictive and effortless customer experiences.
        </p>

        <h6 className="text-h6 font-semibold text-gray-f2f mt-30 mb-30">
          Features
        </h6>

        <div className="grid-feature-container">
          {features.map((feature) => (
            <FeatureCard size="small" key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
