import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Fade } from "reactstrap";
import { getUpcomingItems } from "../api/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  FacebookIcon
} from "react-share";

const UpcomingItems = props => {
  const [loaded, setLoaded] = useState(false);
  const [storeData, setStoreData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingItems()
      .then(res => {
        setStoreData(res.data.data);
        setLoaded(true);
      })
      .catch(err => {
        setError(true);
      });
  }, []);

  return (
    <div>
      <div className="icon-bar">
        <FacebookShareButton url="www.google.com" quote="Check out the current Fornite Upcoming items here!">
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton url="www.google.com" title="Check out the current Fornite Upcoming Items!">
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton url="www.google.com" title="Check out the current Fornite Upcoming Items!" hashtags={['fornite', 'battleroyale', 'items', 'upcoming']}>
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <Container className="mb-5">
        <h1 className="mt-4 align-left fn-text l-grey">Upcoming Items</h1>
        {!loaded && !error && (
          <div className="text-center">
            <Spinner size="lg" color="primary" />
          </div>
        )}
        {error && (
          <div className="text-center">
            <h1 className="fn-text l-grey">We encourntered an error!</h1>
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

export default UpcomingItems;
