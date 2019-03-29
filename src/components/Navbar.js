import React, { Component } from "react";
import NavBarCommon from "./common/NavbarCommon";


class Navbar extends Component {

  state = {
    visible: false
  };

  leftMenuItems = [
    { as: "a", content: "Daily Store", key: "dailystore",},
    { as: "a", content: "Upcoming Items", key: "upcoming" }
  ];

  rightItems = [

  ];

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
     <NavBarCommon leftItems={this.leftMenuItems} rightItems={this.rightItems} />
    );
  }
}

export default Navbar;
