import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Fade, Alert } from "reactstrap";
import { getStoreData } from "../api/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  FacebookIcon
} from "react-share";

import AdSense from "react-adsense";

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
  }, []);

  return (
    <div>
      <div className="icon-bar">
        <FacebookShareButton
          url="www.google.com"
          quote="Check out the current Fornite Daily Store here!"
        >
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton
          url="www.google.com"
          title="Check out the current Fornite Daily Store!"
        >
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton
          url="www.google.com"
          title="Check out the current Fornite Daily Store!"
          hashtags={["fornite", "battleroyale", "dailystore"]}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <Container className="mb-5">
        {/* <AdSense.Google
          client="ca-pub-7186953014182323"
          slot="7806394673"
          style={{ width: 500, height: 100, backgroundColor: "grey"}}
          format=""
        /> */}
        <AdSense.Google
          client="ca-pub-7186953014182323"
          slot="7806394673"
          style={{ display: "block", backgroundColor: "grey", marginTop: 15 }}
          format="auto"
          responsive="true"
        />
        {/* <img src="https://storage.googleapis.com/support-kms-prod/SNP_59D432450939ECC60A21BEDBEE985B1817B1_3094744_en_v2" /> */}
        <h1 className="mt-4 align-left fn-text l-grey">Daily Store</h1>
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
          <div className="text-center">
            <Spinner size="lg" color="primary" />
          </div>
        )}
        {loaded && requestError && (
          <div className="text-center">
            <h1>Yikes. An error has occurred.</h1>
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
            <Container>
              <AdSense.Google
                client="ca-pub-7186953014182323"
                slot="7806394673"
                style={{
                  display: "block",
                  backgroundColor: "grey",
                  marginTop: 15
                }}
                format="auto"
                responsive="true"
              />
            </Container>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default DailyStore;
