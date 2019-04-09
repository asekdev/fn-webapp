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

const News = () => {
  const [loaded, setLoaded] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(res => {
      setNews(res.data.data);
      setLoaded(true);
    });
  }, []);

  return (
    <Container className="mb-5">
      <h1 className="mt-4 align-left">News</h1>
      {!loaded && (
        <div className="text-center align-middle">
          <Spinner size="lg" color="primary" />
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
                xs="6"
                key={index}
              >
                <Card className="cardBackground h-100">
                  {data.meta.adSpace !== null && (
                    <p className="newsAdspace">{data.meta.adSpace}</p>
                  )}
                  <CardImg top width="100%" src={data.image} alt={data.title} />
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
    </Container>
  );
};

export default News;