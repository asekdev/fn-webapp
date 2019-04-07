import React, { Component } from "react";
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

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default Home;
