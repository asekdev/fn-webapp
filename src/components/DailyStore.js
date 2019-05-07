import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Fade } from "reactstrap";
// import { Alert } from "reactstrap";
import { getStoreData } from "../api/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  FacebookIcon
} from "react-share";

const DailyStore = props => {
  const [loaded, setLoaded] = useState(false);
  const [storeData, setStoreData] = useState([]);
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    getStoreData()
      .then(res => {
        // throw new Error("error")
        setStoreData(res.data.data);
        setLoaded(true);
      })
      .catch(err => {
        setLoaded(true);
        setRequestError(true);
      });
    dateNow();
  }, []);

  const dateNow = () => {
    let today = new Date();
    let refresh;
    let hours;

    if (today.getHours() > 0 && today.getHours() < 10) {
      refresh = new Date();
      refresh.setHours(10);
      hours = refresh.getHours() - today.getHours();
    } else {
      refresh = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      refresh.setHours(10);
      hours = Math.abs(today - refresh) / 36e5;
    }
    
    if(hours === 1) {
      return hours + " hour remaining"
    }

    return hours + " hours remaining"
  };

  return (
    <div>
      <div className="icon-bar">
        <FacebookShareButton
          url="www.fndatahub.com"
          quote="Check out the current Fornite Daily Store here!"
        >
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton
          url="www.fndatahub.com"
          title="Check out the current Fornite Daily Store! "
        >
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton
          url="www.fndatahub.com"
          title="Check out the current Fornite Daily Store! www.fndatahub.com"
          hashtags={["fornite", "battleroyale", "dailystore"]}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <Container className="mb-5">
        <Row className="align-items-center">
          <Col>
            <h1 className="mt-4 align-left fn-text l-grey">Daily Store</h1>
          </Col>
          <Col>
            <h4 className="text-right mb-0">
              {`${dateNow()}`}
            </h4>
          </Col>
        </Row>
        {/* <Alert className="mailing-alert">
          <h4 className="alert-heading">Want daily updates?</h4>
          <p className="signup-text">
            <a className="signupbtn" href="/signup">
              Sign Up
            </a>{" "}
            to our mailing list and we'll notify you of the new items when the
            store refreshes.
          </p>
        </Alert> */}
        {!loaded && (
          <div className="notfound-container" style={{ minHeight: "600px" }}>
            <div className="notfound-element">
              <Spinner size="lg" color="primary" />
            </div>
          </div>
        )}

        {loaded && requestError && (
          <div className="notfound-container" style={{ minHeight: "600px" }}>
            <h1 className="text-center notfound-element">
              Yikes. An error has occurred.
            </h1>
            <h4 className="text-center notfound-element mt-3">
              Try refresh the page. If that doesn't work, try again soon.
            </h4>
          </div>
        )}

        <Fade in={loaded}>
          <Row>
            {storeData.map(data => {
              return (
                <Col
                  className="mb-3"
                  xl="3"
                  md="4"
                  sm="6"
                  xs="6"
                  key={data.itemId}
                >
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={data.item.images.information}
                    alt={data.item.name}
                  />
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default DailyStore;
