import React, {useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Badge,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  FacebookIcon,
  GooglePlusIcon
} from "react-share";

const UserStats = props => {
  useEffect(() => {
    console.log(props.match.params.user);
  }, []);

  return (
    <div>
      <div className="icon-bar">
        <FacebookShareButton url="www.google.com">
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton url="www.google.com">
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton url="www.google.com">
          <TwitterIcon />
        </TwitterShareButton>
        <GooglePlusShareButton url="www.google.com">
          <GooglePlusIcon />
        </GooglePlusShareButton>
      </div>
      <Container className="mb-5">
        <Row className="mt-4">
          <Col>
            <h1>Username</h1>
          </Col>
          <Col>
            <h1 className="text-right">
              <Badge>Platform</Badge>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="cardBackground mt-4">
              <CardHeader className="card-header-text">
                <h4 className="mb-0">Overall Data</h4>
              </CardHeader>
              <CardBody className="userstatsbody">
                <Row>
                  <Col>
                    <p className="mb-0 stats-head">
                    <Badge color="primary" pill className="stats-head">KILLS</Badge>
                    </p>
                    <h3 className="mb-0">500</h3>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserStats;
