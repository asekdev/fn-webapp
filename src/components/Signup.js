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
import AnimateOnChange from "react-animate-on-change";

const Signup = props => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [confirmEmailError, setConfirmEmailError] = useState(null);

  const validate = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "firstname":
        let firstNameRegex = /^[a-zA-Z']+( | [a-zA-Z']+)*$/;
        console.log(firstNameRegex.test(value));
        setFirstname(value);

        if (firstNameRegex.test(value)) {
          setFirstNameError(false);
        } else {
          setFirstNameError(true);
        }
        return;
      case "lastname":
        let lastNameRegex = /^[a-zA-Z']+( | [a-zA-Z']+)*$/;
        console.log(lastNameRegex.test(value));
        setLastname(value);
        if (lastNameRegex.test(value)) {
          setLastNameError(false);
        } else {
          setLastNameError(true);
        }
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
    }
  };

  const isValid = () => {
    return (
      firstNameError === false &&
      lastNameError === false &&
      emailError === false &&
      confirmEmailError === false
    );
  };

  const resetForm = () => {
      setFirstname("")
      setLastname("");
      setEmail("");
      setConfirEmail("");

      setFirstNameError(null);
      setLastNameError(null);
      setEmailError(null);
      setConfirmEmailError(null);
  }

  const submit = () => {
      console.log("firstname = ", firstname);
      console.log("lastname = ", lastname);
      console.log("email = ", email);
      console.log("confirm email = ", confirmEmail);
  }

  return (
    <div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">Sign Up</h1>
        <h5 className="align-left l-grey">
          Enter your information to recieve daily updates when the store
          refreshes.
        </h5>
        <hr />
        <Row className="footer-space">
          <Col lg={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="exampleEmail"
                  valid={firstNameError !== null && !firstNameError}
                  invalid={firstNameError}
                  onChange={validate}
                  value={firstname}
                />
                <FormFeedback>Can only be letters.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="exampleEmail"
                  valid={lastNameError !== null && !lastNameError}
                  invalid={lastNameError}
                  onChange={validate}
                  value={lastname}
                />
                <FormFeedback>Can only be letters.</FormFeedback>
              </FormGroup>
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
             
              
            </Form>
            <AnimateOnChange
                baseClassName="Score float-right"
                animationClassName="Score--bounce"
                animate={isValid()}
              >
               <Button
                color="primary"
                disabled={!isValid()}
                onClick={submit}
              >
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

export default Signup;
