import React from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from 'react-router-dom';

const UserCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Dbljntd</CardTitle>
          <CardSubtitle>PC</CardSubtitle>
          <CardLink tag={Link} to={`/stats/${props.username}`}>Link to profile</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export { UserCard };
