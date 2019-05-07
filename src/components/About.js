import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label
} from "reactstrap";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dab from "../assets/images/dab.png";
import Rocket from "../assets/images/rocket.png";

const About = props => {
  return (
    <div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">About</h1>
        <div style={{ minHeight: "500px" }}>
          <Row>
            <Col
            xl="6"
            md="6"
            sm="12"
            xs="12">
              <h5>
                Hiya, I'm Andy - a developer from Melbourne, Australia. I
                decided to build this website to solve the problem of having to
                log into the game everyday to see the daily store.
              </h5>

              <h5 className="mt-4">
                Additonally, we display the upcoming items that may appear
                either in the item shop - or can be obtained by completing
                challenges.
              </h5>

              <h5 className="mt-4">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="ANHTB6YKME8X2" />
                  <input type="hidden" name="currency_code" value="AUD" />
                  <input type="hidden" name="amount" value="3.5" />
                  <span>You could always</span>
                  <button type="submit" className="about-donate">
                    buy me a coffee{" "}
                    <FontAwesomeIcon
                      icon={faCoffee}
                      className="marg-left-5"
                      color="#cd6133"
                    />
                  </button>
                  <span>and help keep the website up and running.</span>
                </form>
              </h5>

              <h5 className="mt-4">I hope you enjoy the site!</h5>

              <h3 className="mt-4">- Andy</h3>
            </Col>
            <Col
             xl="6"
             md="6"
             sm="12"
             xs="12">
              <img
                src={Rocket}
                className="text-center img-fluid mb-3"
                alt="Dab!"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
