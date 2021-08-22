import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container">
          <Card className="py-3 mt-0">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img
                  src="bluestone/BLUESTONE6.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>Who We Are</h2>
                  <p>
                    Bluestone Investments Group is a multidisciplinary local
                    business firm serving the business environment, planning,
                    environmental, architecture, Information Technology
                    engineering and supply of assorted goods and services, by
                    always trying to meet the needs of our cherished clients. We
                    have in-house capability for the supply of assorted goods
                    and services, planning, environmental and design services
                    which allow a fast and effective coordination of all
                    technical disciplines under one roof.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Years of Experience</li>
                        <li>Fully Insured</li>
                        <li>Cost Control Experts</li>
                        <li>100% Satisfaction Guarantee</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Free Consultation</li>
                        <li>Satisfied Customers</li>
                        <li>Project Management</li>
                        <li>Affordable Pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Button
                  as={Link}
                  to="/about"
                  color="blue"
                  content=" Read more"
                  icon="arrow right"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
