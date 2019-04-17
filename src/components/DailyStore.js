import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Fade, Alert, Button } from "reactstrap";
import { getStoreData } from "../api/api";
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

const DailyStore = props => {
  const [loaded, setLoaded] = useState(false);
  const [storeData, setStoreData] = useState([]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    getStoreData().then(res => {
      setStoreData(res.data.data);
      setLoaded(true);
    });
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
        <h1 className="mt-4 align-left fn-text l-grey">Daily Store</h1>
       <Alert className="mailing-alert">
       <h4 className="alert-heading">Want daily updates?</h4>
        <p className="signup-text">
         <a className="signupbtn" href="/signup">Sign Up</a> to our mailing list and we'll notify you of the new items when the store refreshes.
        </p>
       </Alert>
        {!loaded && (
          <div className="text-center">
            <Spinner size="lg" color="primary" />
          </div>
        )}
        <Fade in={loaded}>
          <Row className="footer-space">
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
