import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getStoreData } from '../api/api';

const DailyStore = props => {

  const [loaded, setLoaded] = useState(false);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    getStoreData()
      .then(res => {
        setStoreData(res.data.data)
        setLoaded(true);
      })
  }, [])

    return (
      <Container className="mb-5">
        <h1 className="mt-4 align-left">Daily Store</h1>

        {!loaded && (
          <div className="text-center">
            <Spinner size="lg" color="primary" />
          </div>
        )}
        <Row className="footer-space">
          {storeData.map(data => {
             console.log(storeData)
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
      </Container>
    );
}

export default DailyStore;
