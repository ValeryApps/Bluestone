import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header, Segment, Button } from "semantic-ui-react";
import NavMenu from "../components/NavMenu";

const ErrorPage = () => {
  return (
    <>
      <NavMenu />
      <Container className="mt-5">
        <Segment>
          <Header content="Error!!!" as="h1" textAlign="center" color="red" />
          <p className="lead text-danger text-center">
            Sorry, the document you are looking for does no exist
          </p>
          <Button
            color="red"
            size="massive"
            as={Link}
            to="/"
            icon="home"
            content="Go to home page!"
          />
        </Segment>
      </Container>
    </>
  );
};

export default ErrorPage;
