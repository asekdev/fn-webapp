import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardFooter,
  Fade
} from "reactstrap";
import CardImg from "reactstrap/lib/CardImg";
import bundleImage from "../bundle.png";
import { Link } from "react-router-dom";

const Items = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  });

  return (
    <Container className="mb-5">
      <h1 className="mt-4 align-left">Items</h1>
      {!loaded && (
        <div className="text-center align-middle">
          <Spinner size="lg" color="primary" />
        </div>
      )}
      <Fade in={loaded}>
        <Row className="footer-space">
          <Col
            className="mb-4 min-h-100"
            xl="3"
            md="4"
            sm="6"
            xs="6"
            // key={}
          >
            <Card className="cardBackground zoom h-100" tag={Link} to="/items/bundles">
              <CardImg top width="100%" src={bundleImage} alt={"bundles"} />
              <CardFooter tag="h5">Bundles</CardFooter>
            </Card>
          </Col>
          <Col
            className="mb-4 min-h-100"
            xl="3"
            md="4"
            sm="6"
            xs="6"
            // key={}
          >
            <Card className="cardBackground zoom h-100" tag={Link} to="/items/weapons">
              <CardImg top width="100%" src={bundleImage} alt={"weapons"} />
              <CardFooter tag="h5">Weapons</CardFooter>
            </Card>
          </Col>
          <Col
            className="mb-4 min-h-100"
            xl="3"
            md="4"
            sm="6"
            xs="6"
            // key={}
          >
            <Card className="cardBackground zoom h-100" tag={Link} to="/items/skins">
              <CardImg top width="100%" src={bundleImage} alt={"skins"} />
              <CardFooter tag="h5">Skins</CardFooter>
            </Card>
          </Col>
          <Col
            className="mb-4 min-h-100"
            xl="3"
            md="4"
            sm="6"
            xs="6"
            // key={}
          >
            <Card className="cardBackground zoom h-100" tag={Link} to="/items/toys">
              <CardImg top width="100%" src={bundleImage} alt={"Toys"} />
              <CardFooter tag="h5">Toys</CardFooter>
            </Card>
          </Col>
          <Col
            className="mb-4 min-h-100"
            xl="3"
            md="4"
            sm="6"
            xs="6"
            // key={}
          >
            <Card className="cardBackground zoom h-100" tag={Link} to="/items/backblings">
              <CardImg top width="100%" src={bundleImage} alt={"Back blings"} />
              <CardFooter tag="h5">Back Blings</CardFooter>
            </Card>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Items;
