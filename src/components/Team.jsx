import React from "react";
import { teamMembers } from "../data/services";
import TeamCard from "./TeamCard";
// import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section
      id="team"
      className="md-section md-skin-dark"
      //   id="id6"
      style={{
        backgroundImage: 'url("assets/img/bg/demo.jpg")',
        paddingBottom: "50px",
      }}
    >
      <div className="md-overlay"></div>
      <div className="container">
        <div className="section-title">
          <h2>Our team</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 "></div>
        </div>
        <div className="row">
          {teamMembers.map((teamMember) => (
            <TeamCard teamMember={teamMember} key={teamMember.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
