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
         url="www.fndatahub.com/news"
          quote="Check out the current Fornite News here!"
        >
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton
         url="www.fndatahub.com/news"
          title="Check out the current Fornite News!"
        >
          <RedditIcon />
        </RedditShareButton>
        <TwitterShareButton
        url="www.fndatahub.com/news"
          title="Check out the current Fornite News! www.fndatahub.com/news"
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
          // <div className="text-center error-div">

          // </div>
        )}
        <Fade in={loaded}>
          <Row>
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
          </Row>
        </Fade>
        <Container>
          <AdSense.Google
            client="ca-pub-7186953014182323"
            slot="7806394673"
            style={{
              display: "block",
              backgroundColor: "grey",
              marginTop: 15,
              marginBottom: 15
            }}
            format="auto"
            responsive="true"
          />
        </Container>
      </Container>
    </div>
  );
};

export default News;
