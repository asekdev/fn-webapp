import React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Row,
  Col
} from "reactstrap";
import { UserCard } from "./common";
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

const Home = () =>  {

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
      <Container>
        <Row className="align-middle">
          <Col className="mt-5">
            <h1 className="text-center">Lookup your stats!</h1>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <Button color="primary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <h1 className="mt-5">Leaderboards</h1>
        <Row>
          <Col>
          <UserCard username="dbljntd"/>
          </Col>
          <Col>
          <UserCard username="ninja"/>
          </Col>
          <Col>
          <UserCard username="timthetatman"/>
          </Col>
        </Row>
      </Container>
      </div>
     
    );
}

export default Home;
