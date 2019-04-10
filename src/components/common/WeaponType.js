import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,

} from "reactstrap";

const WeaponType = props => {
  const { data, rarity } = props;

  const rarityClass = rarity + "bg";

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Row>
      <Col xl="12" md="12" sm="12" xs="12">
        <h2>{capitalize(rarity)}</h2>
      </Col>
      {data.map(d => {
        return (
          <Col className="mb-4" xl="3" md="6" sm="6" xs="6" key={d.hash}>
            <Card className="cardBackground">
              <div className={`${rarityClass} text-center`}>
              <CardImg top className="weaponImg" src={d.images.image} alt={d.title} />
              </div>
              <CardBody>
                <CardTitle className="cardTitle">
                  <strong>{d.name}</strong>
                </CardTitle>
                <Row>
                  <Col xl="5" md="5" sm="5" xs="5">
                    <p>Stats</p>
                  </Col>
                  <Col xl="7" md="7" sm="7" xs="7">
                    <p className="text-right">{d.stats.dps} DPS</p>
                  </Col>
                  <hr />
                </Row>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export { WeaponType };
