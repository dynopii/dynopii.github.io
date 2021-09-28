import React from "react";
import { FaAws } from "react-icons/fa";
import { CgDigitalocean } from "react-icons/cg";
import Image from "next/image";
interface Props {}

export const OurSolutionsBacked: React.FC<Props> = () => {
  return (
    <div className="py-40">
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center my-40">
        Our Solutions backed by the best in the world
      </h3>
      <div className="flex items-center justify-around flex-wrap">
        <div className="w-40 h-40 bg-gray-333 flex items-center justify-center rounded-default mt-20">
          <FaAws size={70} fill="#ffffff" />
        </div>
        <div className="w-40 h-40 bg-gray-333 flex items-center justify-center rounded-default mt-20">
          <CgDigitalocean size={70} fill="#ffffff" color="#ffffff" />
        </div>
        <div className="w-40 h-40 bg-gray-333 flex items-center justify-center rounded-default mt-20">
          <div className="w-16 h-16 overflow-hidden">
            <Image
              src="/images/Backend-Capital.png"
              width="100%"
              height="100%"
              className="object-cover w-full h-full"
              alt="Backend Capital"
            />
          </div>
        </div>
        <div className="w-40 h-40 bg-gray-333 flex items-center justify-center rounded-default mt-20">
          <div className="w-20 h-20 overflow-hidden">
            <Image
              src="/images/10,000-Startups.png"
              width="100%"
              height="100%"
              className="object-contain w-full h-full"
              alt="10,000-Startups.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
