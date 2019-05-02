import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="marg-top-10">
          <Col xs="12" sm="12" md="6">
            <p className="text-muted text-center">
              All rights are to Epic Games.{" "}
            </p>
          </Col>
          <Col xs="12" sm="12" md="6">
           
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
                className="text-center"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="ANHTB6YKME8X2" />
                <input type="hidden" name="currency_code" value="AUD" />
                <input type="hidden" name="amount" value="3.5" />
                <button type="submit" className="paypal-donate">
                  Buy the developer a coffee{" "}
                  <FontAwesomeIcon
                    icon={faCoffee}
                    className="marg-left-5"
                    color="#cd6133"
                  />
                </button>
              </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
