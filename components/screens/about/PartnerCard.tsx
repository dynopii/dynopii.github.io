import React from "react";

interface Props {
  name: string;
  designation: string;
  photo: string;
}

export const PartnerCard: React.FC<Props> = ({ name, designation, photo }) => {
  return (
    // <div className="flex flex-col items-center w-60 md:mx-40 xl:mr-40 md:mb-4">
    <div className="flex flex-col items-center mt-70 md:mt-40 w-40 mx-50 sm:mx-20">
      <div className="overflow-hidden rounded-default w-40 h-40 ">
        <img src={photo} className="object-cover w-full h-full" alt="Team" />
      </div>
      <h5 className="text-gray-f2f text-h5 font-semibold mt-25 md:mt-1">
        {name}
      </h5>
      <p className="font-regular text-gray-bdb text-body-lg mt-1">
        {designation}
      </p>
    </div>
  );
};
