import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Fade } from "reactstrap";
import { getUpcomingItems } from "../api/api";

const UpcomingItems = props => {
  const [loaded, setLoaded] = useState(false);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    getUpcomingItems().then(res => {
      setStoreData(res.data.data);
      setLoaded(true);
    });
  }, []);

  return (
    <Container className="mb-5">
      <h1 className="mt-4 align-left">Upcoming Items</h1>
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
                />
              </Col>
            );
          })}
        </Row>
      </Fade>
    </Container>
  );
};

export default UpcomingItems;
