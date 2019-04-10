import React, { useState, useEffect } from "react";
import { getAllWeapons } from "../api/api";
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Fade
} from "reactstrap";
import { WeaponType } from "./common";
const Weapons = () => {
  const [weaponData, setWeaponData] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("getting to use effect");
    getAllWeapons()
      .then(res => {
        console.log(res);
        setWeaponData(res.data.weapons);
        setLoaded(true);
      })
      .catch(err => {
        setError(true);
      });
  }, []);

  const sortData = rarity => {
    const sortedData = weaponData.filter(d => d.rarity === rarity);

    return sortedData;
  };

  return (
    <Container className="mb-5">
      <h1 className="mt-4 align-left">Weapons</h1>
      {!loaded && (
        <div className="text-center align-middle">
          <Spinner size="lg" color="primary" />
        </div>
      )}
      <Fade in={loaded}>
        <Row className="footer-space">
          {error && <h1>Whoops, we encountered an error!</h1>}
          {weaponData.length > 0 && (
            <WeaponType data={sortData("common")} rarity="common" />
          )}
          {weaponData.length > 0 && (
            <WeaponType data={sortData("uncommon")} rarity="uncommon" />
          )}
          {weaponData.length > 0 && (
            <WeaponType data={sortData("rare")} rarity="rare" />
          )}
          {weaponData.length > 0 && (
            <WeaponType data={sortData("epic")} rarity="epic" />
          )}
          {weaponData.length > 0 && (
            <WeaponType data={sortData("legendary")} rarity="legendary" />
          )}
        </Row>
      </Fade>
    </Container>
  );
};

export default Weapons;
