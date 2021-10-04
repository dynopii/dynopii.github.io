import React from "react";
import { customers } from '../../../shared/contents';

interface Props { }

export const OurCustomers: React.FC<Props> = () => {
  return (
    <div className="py-40">
      <h3 className="text-h3 sm:text-h4 font-semibold text-gray-e0e text-center my-40">
        Our Customers
      </h3>
      <div className="flex items-center justify-around flex-wrap">
        {customers.map((customer, i) => (
          <div
            className="w-40 h-40 bg-gray-333 rounded-default flex items-center justify-center mt-20"
            key={customer.id}
          >
            <div className="w-30 h-30 flex items-center justify-center">
              <img
                src={customer.photo}
                width={100}
                height={100}
                className="h-full w-full object-contain"
                alt={customer.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

