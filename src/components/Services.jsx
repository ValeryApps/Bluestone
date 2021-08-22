import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Image } from "semantic-ui-react";

const Services = () => {
  return (
    <>
      <div className="bg-info py-5">
        <h1 className="text-center text-white">Our Services</h1>
      </div>
      <div id="services">
        <div className="container">
          <Card>
            <Image src="/service.jpg" />
            <div className="row">
              <div className="col-sm-8 mx-auto text-center">
                <Button
                  content="Read more"
                  as={Link}
                  to="/services"
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

export default Services;
