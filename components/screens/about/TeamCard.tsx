import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { colors, prefix } from "../../../shared/constants";
import Link from "next/link";

interface Props {
  link: string;
  photo: string;
  name: string;
  description?: string;
  twitter?: string;
  linkedin?: string;
}

export const TeamCard: React.FC<Props> = ({
  link,
  photo,
  name,
  description,
  twitter,
  linkedin,
}) => {
  return (
    <div className="mt-70 md:mt-40 w-40 mx-50 sm:mx-20">
      {/* <div className="mt-70 md:mt-40 w-56 sm:w-44 md:mx-40"> */}
      <Link href={link}>
        <a>
          <div className="overflow-hidden rounded-default w-40 h-40">
            <img
              // src="/images/team-demo-pic.png"
              src={prefix + photo}
              className="object-cover w-full h-full"
              alt={name}
            />
          </div>
        </a>
      </Link>
      <Link href={link}>
        <a>
          <h5 className="text-gray-f2f text-h5 font-semibold mt-25 w-40">
            {name}
          </h5>
        </a>
      </Link>
      {description && (
        <p className="text-gray-bdb font-normal text-body-sm mt-10 w-40">
          {description}
        </p>
      )}
      <div className="flex items-center mt-5">
        {twitter && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <AiOutlineTwitter size={15} fill={colors.twitter} />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            className={twitter ? "ml-15" : ""}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={15} fill={colors.linkedin} />
          </a>
        )}
      </div>
    </div>
  );
};
