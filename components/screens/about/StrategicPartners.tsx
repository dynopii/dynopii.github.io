import React from "react";
import {
  aboutUsContents,
  StrategicPartnersData,
} from "../../../shared/contents";
import { PartnerCard } from "./PartnerCard";

interface Props {}

export const StrategicPartners: React.FC<Props> = () => {
  return (
    <section>
      <div className="mx-auto max-w-4xl">
        <h3 className="text-h3 font-semibold text-gray-e0e text-center pt-70">
          {aboutUsContents.StrategicPartners.title}
        </h3>
        <div className="flex items-center justify-center max-w-3xl md:max-w-xl mx-auto flex-wrap mb-70">
          {StrategicPartnersData.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};
