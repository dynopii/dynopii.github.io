import React from "react";
import { Ghost_Blogs_Post } from "../../../shared/types";
import { MdDateRange } from "react-icons/md";
import { DateFormatter } from "../../../shared/utils";
import Image from "next/image";

interface Props {}

export const BlogCard: React.FC<Ghost_Blogs_Post> = ({
  feature_image,
  excerpt,
  created_at,
  title,
  url,
  published_at,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className="xl:mt-40 bg-gray-333 hover:bg-gray-444 rounded-default p-30 transition-all"
        style={{ maxWidth: "350px" }}
      >
        <div className="overflow-hidden rounded-default">
          <img
            src={feature_image}
            style={{
              objectFit: "cover",
              overflow: "hidden",
              height: 175,
              width: 350,
            }}
            alt="Blog"
          />
          {/* <Image
            src={feature_image}
            width={350}
            height={175}
            objectFit="cover"
            className="rounded-default overflow-hidden"
            alt={`Blog - ${title}`}
          /> */}
        </div>
        <h6 className="font-medium text-h6 text-gray-f2f mt-20">{title}</h6>
        <div className="flex items-center justify-start mt-20">
          <MdDateRange fill="#ffffff" size={20} />
          <p className="text-body-lg font-normal text-gray-e0e ml-10">
            {DateFormatter.formatDate(new Date(published_at), "DD-MMM-YYYY")}
          </p>
        </div>
      </div>
    </a>
  );
};
