import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardHeader,
  Badge
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
          <Col className="mb-4 wep-zoom" xl="3" md="4" sm="6" xs="6" key={d.hash}>
            <Card className="cardBackground min-h-100">
              <CardHeader className="cardTitle">
                <strong><h6>{d.name}</h6></strong>
              </CardHeader>
              <div className={`${rarityClass} text-center`}>
                <CardImg
                  top
                  className="weaponImg"
                  src={d.images.image}
                  alt={d.title}
                />
              </div>
              <CardBody className="weapon-card-body">
                <Row>
                  <Col xl="12" md="12" sm="12" xs="12" className="text-center weapon-dmg-container">
                    <Badge pill color="danger" color="danger" className="text-center">{d.stats.dps} DPS</Badge>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" xl="6" md="6" sm="6" xs="12">
                    <p className="mb-0">Damage</p>
                    <Badge pill color="light">Headshot: {d.stats.damage.head}</Badge>
                    <Badge pill color="primary">Body: {d.stats.damage.body}</Badge>
                  </Col>
                  <Col className="pr-0" xl="6" md="6" sm="6" xs="12">
                    <p className="mb-0">Magazine</p>
                    <Badge pill color="warning">Reload: {d.stats.magazine.reload}s</Badge>
                    <Badge pill color="warning">Clip: {d.stats.magazine.size}</Badge>
                    {/* <p> </p>
                    <p></p> */}
                  </Col>
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
