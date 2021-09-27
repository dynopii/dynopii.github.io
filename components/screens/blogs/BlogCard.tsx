import React from "react";
import Link from "next/link";
interface Props {}

export const BlogCard: React.FC<Props> = () => {
  return (
    <Link href="/blogs">
      <a>
        <div
          className="md:mt-20 bg-gray-333 hover:bg-gray-444 rounded-default p-30 transition-all"
          style={{ maxWidth: "350px" }}
        >
          <div className="overflow-hidden rounded-default">
            <img
              src="/images/blog-demo.png"
              width={350}
              height={175}
              alt="Blog"
            />
          </div>
          <h6 className="font-medium text-h6 text-gray-f2f mt-20">
            Announcing new, consolidated site for all technical resources:
            docs.digitalocean.com
          </h6>
          <div className="flex items-center justify-start mt-20">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.445801 22.862V8.70996C0.445801 4.33334 3.29554 0.771973 6.79763 0.771973H17.236C20.7389 0.771973 23.5894 4.33334 23.5894 8.70996V11.1509C23.5894 15.5276 20.7396 19.0889 17.2375 19.0889H6.94489L0.445801 22.862ZM6.79763 2.54169C4.07607 2.54169 1.8619 5.30878 1.8619 8.70996V20.0882L6.63283 17.3183H17.2375C19.9591 17.3183 22.1733 14.5512 22.1733 11.15V8.709C22.1733 5.30783 19.9583 2.54074 17.236 2.54074H6.79763V2.54169ZM7.26458 8.57551C8.00849 8.57551 8.61124 9.32878 8.61124 10.2585C8.61124 11.1881 8.00849 11.9414 7.26458 11.9414C6.52067 11.9414 5.91791 11.1881 5.91791 10.2585C5.91791 9.32878 6.52067 8.57551 7.26458 8.57551ZM16.7698 8.57551C17.5137 8.57551 18.1165 9.32878 18.1165 10.2585C18.1165 11.1881 17.5137 11.9414 16.7698 11.9414C16.0259 11.9414 15.4232 11.1881 15.4232 10.2585C15.4232 9.32878 16.0259 8.57551 16.7698 8.57551ZM12.0164 8.57551C12.7603 8.57551 13.3631 9.32878 13.3631 10.2585C13.3631 11.1881 12.7603 11.9414 12.0164 11.9414C11.2725 11.9414 10.6698 11.1881 10.6698 10.2585C10.6698 9.32878 11.2725 8.57551 12.0164 8.57551Z"
                fill="#E0E0E0"
              />
            </svg>
            <p className="text-body-lg font-normal text-gray-e0e ml-10">
              343 Comments
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
