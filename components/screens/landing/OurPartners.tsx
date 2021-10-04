import React from "react";
import { partners } from '../../../shared/contents';

interface Props { }

export const OurPartners: React.FC<Props> = () => {
  return (
    <div id="partners" className="pt-50">
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center">
        Our Partners
      </h3>
      <div className="flex flex-wrap justify-around mt-30">
        {partners.map((partner, i) => (
          <div key={i} className="mt-20">
            <div className="w-48 overflow-hidden rounded-default">
              <img
                src={partner.img_src}
                className="w-full h-fill object-cover"
                alt={`${partner.name} photo`}
              />
            </div>
            <h5 className="text-center text-h5 text-gray-f2f font-semibold mt-25 w-48">
              {partner.name}{" "}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
