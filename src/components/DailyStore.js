import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import axios from "axios";

class DailyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      store: []
    };
  }

  async componentDidMount() {
    let storeItems = await axios.get(
      "http://localhost:3000/api/upcoming/store"
    );
    let storeItemData = storeItems.data.data;
    console.log(storeItemData);
    this.setState({ store: storeItemData, loaded: true });
  }

  render() {
    let { store, loaded } = this.state;

    return (
      <Container className="mb-5">
        <Row>
          <Col>
            <h1 className="mt-4 align-left">Daily Store</h1>
          </Col>
          <Col>
            {/* <h3 className="mt-5 text-right">{new Date().getMonth()}</h3> */}
          </Col>
        </Row>
        {!loaded && (
          <div className="text-center">
            <Spinner size="lg" color="primary" />
          </div>
        )}
        <Row className="footer-space">
          {store.map(data => {
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
}

export default DailyStore;
