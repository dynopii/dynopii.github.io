import React from "react";
interface Props {
  id: string;
  Icon: React.ReactNode;
  description: string;
  link?: boolean;
  href?: string;
}

export const ContactItem: React.FC<Props> = ({
  Icon,
  description,
  link,
  href,
}) => {
  return (
    <>
      {link ? (
        <div className="mb-45">
          <a className="flex items-start" href={href}>
            {Icon}
            <p className="text-subtitle text-white font-medium text-f2f ml-20 w-9/12">
              {description}
            </p>
          </a>
        </div>
      ) : (
        <div className="flex items-start mb-45">
          {Icon}
          <p className="text-subtitle text-white font-medium text-f2f ml-20 w-9/12">
            {description}
          </p>
        </div>
      )}
    </>
  );
};
