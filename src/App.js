import React from "react";
import "./App.css";
import CustNavbar from "./components/CustNavbar";
import { Container } from "reactstrap";
import Routes from "./routes/Routes";
import { Footer } from "./components/common/index";


const App = props => {
  return (
    <div>
      <CustNavbar />
      <Routes />
      <Container style={{ marginBottom: "250px" }}>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
