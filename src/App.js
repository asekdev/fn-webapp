import React from "react";
import "./App.css";
import CustNavbar from "./components/CustNavbar";
import { Container } from "reactstrap";
import Routes from "./routes/Routes";
import { Footer } from "./components/common/index";
// import { Store } from "./context/Store";
import AdSense from "react-adsense";

const App = props => {
  // const store = useContext(Store);

  return (
    <div>
      <CustNavbar />
      <Container>
        <AdSense.Google
          client="ca-pub-7186953014182323"
          slot="7806394673"
          style={{ display: "block", marginTop: 15 }}
          format="auto"
          responsive="true"
        />
      </Container>
      <Routes />
      <Container style={{ marginBottom: "250px" }}>
        <AdSense.Google
          client="ca-pub-7186953014182323"
          slot="7806394673"
          style={{ display: "block", marginTop: 15 }}
          format="auto"
          responsive="true"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
