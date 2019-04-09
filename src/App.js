import React, { useContext } from "react";
import "./App.css";
import CustNavbar from "./components/CustNavbar";
import Routes from "./routes/Routes";
import { Footer } from "./components/common/index";
import { Store } from "./context/Store";

const App = props => {
  const store = useContext(Store);

  return (
    <div>
      {console.log("Store", store)}
      <CustNavbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
