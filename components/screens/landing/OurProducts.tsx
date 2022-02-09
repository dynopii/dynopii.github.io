import React from "react";
import { landingContents } from "../../../shared/contents";
import { Dhwani } from "../products/Dhwani";
import { DialSense } from "../products/DialSense";

interface Props {}

export const OurProducts: React.FC<Props> = () => {
  return (
    <div className="py-40">
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center mt-50 mb-40">
        {landingContents.ourProductsSection.title}
      </h3>
      <Dhwani />
      <div className="mb-15 mt-70">
        <DialSense />
      </div>
    </div>
  );
};
