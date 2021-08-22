import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";

const ErrorComponent = ({ error }) => {
  return (
    <Segment>
      <Header
        textAlign="center"
        content={error ? error?.message : "Oops! there was an error"}
      />
      <Button content="Go back to homePage" primary as={Link} to="/" />
    </Segment>
  );
};

export default ErrorComponent;
