/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { urls } from "../../shared/urls";
import { contactUsContents, footerContents } from "../../shared/contents";
import Link from "next/link";
import { DynopiiMap } from "../SVGs";

interface Props {
  route?: string;
}

export const Footer: React.FC<Props> = ({ route }) => {
  return (
    <>
      <footer className="mt-90 md:mt-50 m-30">
        <div className="bg-gray-100">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-between">
            {footerContents.links.map((footerLink) => (
              <div key={footerLink.id} className="p-5 w-40">
                <FooterLinkTitle title={footerLink.title} />
                {footerLink.subLinks.map(
                  (link: {
                    id: string;
                    title: string;
                    href: string;
                    spanText?: string;
                    inDOM?: boolean;
                  }) => (
                    <FooterLink
                      key={link.id}
                      title={link.title}
                      href={link.href}
                      spanText={link.spanText || ""}
                      inDOM={link?.inDOM}
                    />
                  )
                )}
              </div>
            ))}
            <div className="p-5 w-96 xs:w-full">
              <FooterLinkTitle title="Contact us" />
              {/* <FooterLinkTitle title="United States" classNames="mt-3" /> */}
              <p className="my-3 block text-gray-999">
                {contactUsContents.addressUS}
              </p>
              {/* <FooterLinkTitle title="India" /> */}
              <p className="my-3 block text-gray-999">
                {contactUsContents.addressIndia}
              </p>
              <a
                className="my-3 block text-gray-999 hover:text-gray-f2f transition-all"
                href={`mailto:${contactUsContents.email}`}
              >
                {contactUsContents.email}{" "}
                <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
            <div className="p-5 w-48 hidden lg:block"></div>
          </div>
        </div>
        {/* <Image
          src="/svgs/dynopii-world.svg"
          height={"100%"}
          width={"100%"}
          objectFit="cover"
          alt="Dynopii in Various Countries"
        /> */}

        {/* Map Section */}
        {route === "landing" && (
          <div className="mx-auto my-40" style={{ maxWidth: "1200px" }}>
            <p className="text-h6 text-center font-normal text-gray-999">
              {footerContents.mapTitle}
            </p>
            <DynopiiMap height={"100%"} width={"100%"} />
          </div>
        )}

        <div className="bg-gray-100 pt-2 ">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-333 text-sm justify-between
      md:flex-row max-w-6xl pt-20 mb-20 items-center"
          >
            <div className="mt-2 text-gray-999">{footerContents.copyright}</div>
            <div className=" mt-2 flex-row flex">
              <a
                href={urls.DYNOPII_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="transition-all mr-30"
              >
                <FaLinkedinIn
                  className="text-white transition-all hover:text-social-linkedin"
                  size={16}
                />
              </a>
              <a
                href={urls.DYNOPII_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="transition-all mr-30"
              >
                <AiOutlineInstagram
                  className="text-white transition-all hover:text-social-instagram"
                  size={18}
                />
              </a>
              <a
                href={urls.DYNOPII_TWITTER}
                target="_blank"
                rel="noreferrer"
                className="transition-all"
              >
                <AiOutlineTwitter
                  className="text-white transition-all hover:text-social-twitter"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

type FooterLinkProps = {
  href: string;
  title: string;
  spanText?: string;
  inDOM?: boolean;
};

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  title,
  spanText = "",
  inDOM = true,
}) => {
  return (
    <>
      {inDOM ? (
        <>
          <Link href={href}>
            <a className="my-3 block text-gray-999 hover:text-gray-f2f transition-all">
              {title}{" "}
              <span className="text-teal-600 text-xs p-1 text-brand">
                {spanText || ""}
              </span>
            </a>
          </Link>
        </>
      ) : (
        <a
          className="my-3 block text-gray-999 hover:text-gray-f2f transition-all"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {title}{" "}
          <span className="text-teal-999 text-xs p-1 text-brand">
            {spanText || ""}
          </span>
        </a>
      )}
    </>
  );
};

export const FooterLinkTitle: React.FC<{ title: string; classNames?: string }> =
  ({ title, classNames }) => {
    return (
      <div
        className={`text-xs uppercase text-gray-777 font-medium text-gray-444 ${
          classNames || ""
        }`}
      >
        {title}
      </div>
    );
  };
