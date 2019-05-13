import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dab from "../assets/images/dab.png";

const About = props => {
  return (
    <div>
      <Container className="mb-5 mt-5">
        <h1 className="mt-4 align-left fn-text l-grey">About</h1>
        <div style={{ minHeight: "500px" }}>
          <Row>
            <Col
            xl="7"
            md="7"
            sm="12"
            xs="12">
              <h5>
                Hi there, I'm Andy - a developer from Melbourne, Australia. I built
                this website so that you no longer need to log into the game to see the
                daily store.
              </h5>
              <h5 className="mt-4">
                Additionally, you can find the upcoming items that may appear
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
                    buy me a coffee
                    <FontAwesomeIcon
                      icon={faCoffee}
                      className="marg-left-5"
                      color="#cd6133"
                    />
                  </button>
                  <span>and help keep the website up and running.</span>
                </form>
              </h5>
              <h5 className="mt-4">Enjoy the site!</h5>
            </Col>
            <Col
             xl="5"
             md="5"
             sm="12"
             xs="12">
              <img
                src={Dab}
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
