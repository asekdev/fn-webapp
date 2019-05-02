import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Fade
} from "reactstrap";
import { getNews } from "../api/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  FacebookIcon
} from "react-share";

import AdSense from "react-adsense";

const News = () => {
  const [loaded, setLoaded] = useState(false);
  const [news, setNews] = useState([]);
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    getNews()
      .then(res => {
        setNews(res.data.data);
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
          quote="Check out the current Fornite News here!"
        >
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton
          url="www.google.com"
          title="Check out the current Fornite News!"
        >
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton
          url="www.google.com"
          title="Check out the current Fornite News!"
          hashtags={["fornite", "battleroyale", "news"]}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <Container className="mb-5">
        <AdSense.Google
          client="ca-pub-7186953014182323"
          slot="7806394673"
          style={{ display: "block", backgroundColor: "grey", marginTop: 15 }}
          format="auto"
          responsive="true"
        />
        <h1 className="mt-4 align-left fn-text l-grey">News</h1>
        {!loaded && (
          <div className="text-center align-middle">
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
            {news.map((data, index) => {
              return (
                <Col
                  className="mb-4 min-h-100"
                  xl="4"
                  md="6"
                  sm="6"
                  xs="12"
                  key={index}
                >
                  <Card className="cardBackground h-100">
                    {data.meta.adSpace !== null && (
                      <p className="newsAdspace fn-text">{data.meta.adSpace}</p>
                    )}
                    <CardImg
                      top
                      width="100%"
                      src={data.image}
                      alt={data.title}
                    />
                    <CardBody>
                      <CardTitle className="cardTitle">
                        <strong>{data.title}</strong>
                      </CardTitle>
                      <CardText className="cardBody">{data.body}</CardText>
                    </CardBody>
                  </Card>
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

export default News;
