import React, { Component } from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { activeItem: "dashboard" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="massive" color="violet" inverted secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="dashboard"
          onClick={this.handleItemClick}
        >
          <Icon name="gamepad" />
          <strong>FN Data</strong>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="dashboard" />
            Upcoming Items
          </Menu.Item>

          <Menu.Item
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="dashboard" />
            Daily Store
          </Menu.Item>

        

          
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
