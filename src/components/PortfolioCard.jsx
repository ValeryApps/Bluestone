import React from "react";

const PortfolioCard = ({ work }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="portfolio-item">
        <div className="hover-bg">
          <a
            href={work.largeUrl}
            title="Project Title"
            data-lightbox-gallery="gallery1"
          >
            <div className="hover-text">
              <h4>{work.title}</h4>
            </div>
            <img
              src={work.smallUrl}
              className="img-fluid"
              alt="Project Title"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
