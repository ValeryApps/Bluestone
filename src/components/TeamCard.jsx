import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ teamMember }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 ">
      <div className="team">
        <div className="team__img">
          <img src={teamMember.imageUrl} alt="" />
          <div className="team__overlay">
            <div className="md-tb">
              <div className="md-tb__cell md-text-center">
                <Link className="social-icon social-icon__style-03" to="#">
                  <i className="social-icon__icon fa fa-facebook"></i>
                </Link>

                <Link className="social-icon social-icon__style-03" to="#">
                  <i className="social-icon__icon fa fa-twitter"></i>
                </Link>

                <Link className="social-icon social-icon__style-03" to="#">
                  <i className="social-icon__icon fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="team__body">
          <div className="team__user">
            <h4 className="team__name">{teamMember.name}</h4>
            <span className="team__work">{teamMember.position}</span>
          </div>
          <p className="team__text">{teamMember.observation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
