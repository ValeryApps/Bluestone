import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto intro-text">
                <div className="row ">
                  <div className="col-md-8 col-sm-9 mx-auto mx-1">
                    <div className="container ml-5 ">
                      <h4 className="lead text-white text-left ">
                        <Typewriter
                          options={{
                            deleteSpeed: 45,
                            strings: [
                              "This website is still under construction !  Thank you.",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </h4>
                    </div>
                  </div>
                </div>
                <h1 className="header-title text-center">
                  Bluestone
                </h1>
                <br />
                <h3 className="sub-title text-center">Investment Group Inc.</h3>
                <br />
                <span className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                </span>
                <br /> <br /> <br />
                <Button
                  as={Link}
                  to="/about"
                  color="blue"
                  content="Read more"
                  icon="arrow right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
