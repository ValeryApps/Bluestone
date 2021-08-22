import React from "react";
import { Card } from "react-bootstrap";
import { works } from "../data/services";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="bg-warning py-5">
        <h1 className="text-center text-dark">Our Work</h1>
      </div>
      <div id="portfolio">
        <div className="container">
          <Card>
            <div className="portfolio-items">
              <div className="row">
                {works.map((work) => (
                  <PortfolioCard work={work} key={work.id} />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
