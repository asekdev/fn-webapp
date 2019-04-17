import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label
} from "reactstrap";

const Signup = props => {

  return (
    <div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">Sign Up </h1>
        <h5 className="align-left l-grey">Enter your information to recieve daily updates when the store refreshes.</h5>
        <hr />
        <Row className="footer-space">
          <Col lg={{size: 6, offset: 3}}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input type="text" name="form_firstname" id="exampleEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Last Name</Label>
                <Input type="text" name="form_lastname" id="exampleEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@example.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Confirm Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@example.com"
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
