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
import AnimateOnChange from "react-animate-on-change";

const Contact = props => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirEmail] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [confirmEmailError, setConfirmEmailError] = useState(null);

  const validate = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "subject":
        setSubject(value);
        return;
      case "body":
        setBody(value);
        return;
      case "email":
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        console.log(emailRegex.test(value));
        setEmail(value);
        if (emailRegex.test(value)) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        return;
      case "confirmEmail":
        setConfirEmail(value);
        console.log(value);
        if (value === email) {
          setConfirmEmailError(false);
        } else {
          setConfirmEmailError(true);
        }
        return;
      default:
        return;
    }
  };

  const isValid = () => {
    return emailError === false && confirmEmailError === false;
  };

  const resetForm = () => {
    setBody("");
    setSubject("");
    setEmail("");
    setConfirEmail("");
    setEmailError(null);
    setConfirmEmailError(null);
  };

  const submit = () => {
      console.log("body = ", body);
      console.log("subject = ", subject);
      console.log("email = ", email);
      console.log("confirm email = ", confirmEmail);
  };

  return (
    <div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">Contact</h1>
        <h5 className="align-left l-grey">
          Have feedback? Want to tell us how we can improve?
        </h5>
        <h5>Fill out the form and well take note of your feedback!</h5>
        <Row className="footer-space">
          <Col lg={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  valid={emailError !== null && !emailError}
                  invalid={emailError}
                  onChange={validate}
                  value={email}
                />
                <FormFeedback>Invaid email.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Confirm Email</Label>
                <Input
                  type="email"
                  name="confirmEmail"
                  id="exampleEmail"
                  placeholder="example@example.com"
                  valid={confirmEmailError !== null && !confirmEmailError}
                  invalid={confirmEmailError}
                  onChange={validate}
                  value={confirmEmail}
                />
                <FormFeedback>Emails don't match.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="exampleEmail"
                  onChange={validate}
                  value={subject}
                />
              </FormGroup>
              <FormGroup>
                <Label>Body</Label>
                <Input
                  type="textarea"
                  name="body"
                  id="exampleEmail"
               
                  onChange={validate}
                  value={body}
                />
              </FormGroup>
            </Form>
            <AnimateOnChange
              baseClassName="Score float-right"
              animationClassName="Score--bounce"
              animate={isValid()}
            >
              <Button color="primary" disabled={!isValid()} onClick={submit}>
                Submit
              </Button>
            </AnimateOnChange>
            <Button
              className="marg-5 float-right"
              color="danger"
              onClick={resetForm}
            >
              Reset Fields
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
