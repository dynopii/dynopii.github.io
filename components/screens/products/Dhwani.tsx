import React from "react";
import { features } from "../../../shared/staticData";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import DhwaniSVG from "../../../public/svgs/dhwanilogo.svg";
import { dhwaniCard, productsContent } from "../../../shared/contents";
import Exp from "../../animated-gradient";
interface Props {}

export const Dhwani: React.FC<Props> = () => {
  return (
    <div className="bg-gray-333 rounded-default overflow-hidden">
      <div
        className="dhwani-cover-bg h-96 flex items-center justify-center overflow-hidden relative"
        style={{
          background: "no-repeat,linear-gradient(270deg,#9121c2,#ff5e5e)",
        }}
      >
        {/* <div
        className=" h-96 flex items-center justify-center overflow-hidden relative"
        //         style={{
        //           backgroundImage: `#B5179E`,
        //           backgroundImage: `radial-gradient(at 29% 36%, hsla(313,91%,61%,1) 0, transparent 47%),
        // radial-gradient(at 74% 72%, hsla(232,94%,65%,1) 0, transparent 100%),
        // radial-gradient(at 29% 10%, hsla(219,92%,72%,1) 0, transparent 53%),
        // radial-gradient(at 31% 77%, hsla(147,71%,63%,1) 0, transparent 42%)`,
        //         }}
      > */}
        <Image
          className="z-1"
          src={DhwaniSVG}
          alt="logo"
          width={115}
          height={115}
        />
        <h4 className="z-1 text-h4 text-gray-f2f font-normal ml-15">Dhwani</h4>
        {/* <div className="absolute inset-0">
          <Exp />
        </div> */}
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
          {features.map((feature) => (
            <FeatureCard size="small" key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
