import React from "react";
import {
  Container,
  Button
} from "reactstrap";
import GiddyUp from "../assets/images/giddyup.png";

const NotFound = () => {
  return (
    <Container
      className="notfound-container h-100 text-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <img src={GiddyUp} className="text-center img-fluid mb-3" alt="Page not found"/>
        <h1 className="notfound-element fn-text text-center">
          Whoops! Looks like this page doesnt exist.
        </h1>
        <Button color="primary">
          <a href="/" className="go-home-btn">
            Back to home
          </a>
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
