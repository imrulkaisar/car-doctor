import React from "react";
import SectionHeading from "../Sectionheading";
import TeamMember from "../TeamMember";

import member1 from "./../../assets/images/team/1.jpg";
import member2 from "./../../assets/images/team/2.jpg";
import member3 from "./../../assets/images/team/3.jpg";

const TeamSection = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        subTitle="Team"
        title="Meet Our Team"
        className="items-center text-center max-w-xl mx-auto"
      >
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TeamMember
          image={member1}
          name="Car Engine Plug"
          title="Engine Expert"
        />
        <TeamMember
          image={member3}
          name="Car Engine Plug"
          title="Engine Expert"
        />
        <TeamMember
          image={member2}
          name="Car Engine Plug"
          title="Engine Expert"
        />
      </div>
    </section>
  );
};

export default TeamSection;
