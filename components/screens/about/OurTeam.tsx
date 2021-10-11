import React from "react";
import { aboutUsContents, aboutUsTeams } from "../../../shared/contents";
import { TeamCard } from "./TeamCard";

interface Props {}

export const OurTeam: React.FC<Props> = () => {
  return (
    <section id="our-team" className="">
      <div className="mx-auto md:px-30 pt-48" style={{ maxWidth: "1200px" }}>
        <h3 className="text-h3 font-semibold text-gray-e0e mb-40 text-center">
          {aboutUsContents.teamsSection.title}
        </h3>
        <h6 className="text-h6 font-light text-gray-e0e text-center w-7/12 mx-auto md:w-full">
          {aboutUsContents.teamsSection.description}
        </h6>

        <div className="flex items-center justify-center flex-wrap mb-20 max-w-2xl md:max-w-full mx-auto">
          {/* <div className="grid-teams-container mb-70"> */}
          {aboutUsTeams.map((team, i) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
};
