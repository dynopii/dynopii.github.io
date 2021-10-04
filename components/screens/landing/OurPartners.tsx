import React from "react";

interface Props { }

export const OurPartners: React.FC<Props> = () => {
  return (
    <div id="partners" className="pt-50">
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center">
        Our Partners
      </h3>
      <div className="flex flex-wrap items-center justify-around mt-30">
        {strategicPartners.map((partner, i) => (
          <div key={i} className="mt-20">
            <div className="w-48 h-48 overflow-hidden rounded-default">
              <img
                src={partner.img_src}
                className="w-full h-fill object-cover"
                alt={`${partner.name} photo`}
              />
            </div>
            <h5 className="text-center text-h5 text-gray-f2f font-semibold mt-25">
              {partner.name}{" "}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const strategicPartners = [
  {
    "img_src": "/images/team-demo-pic.png",
    "alt": "Backend Capital",
    "name": "Backend Capital"
  },
  {
    "img_src": "/images/team-demo-pic.png",
    "alt": "Infinity Ventures",
    "name": "Infinity Ventures"
  },
  {
    "img_src": "/images/team-demo-pic.png",
    "alt": "Siqi Chen",
    "name": "Siqi Chen"
  },
  {
    "img_src": "/images/team-demo-pic.png",
    "alt": "Fan Zhang",
    "name": "Fan Zhang"
  },
  {
    "img_src": "/images/team-demo-pic.png",
    "alt": "Globaltech AI Capital",
    "name": "Globaltech AI Capital"
  },
];

