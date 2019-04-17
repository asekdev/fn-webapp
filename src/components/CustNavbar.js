import React from "react";
import { Link as RRNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
  faShoppingBag,
  faChartPie,
  faThLarge,
  faStar,
  faEye,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";

class CustNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeTile: "player"
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  isActive = activeItem => {
    return activeItem === this.state.activeTile;
  };

  setActiveTitle = name => {
    this.setState({
      activeTile: name,
      isOpen: false
    });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#2c3e50" }}
          dark
          expand="lg"
          fixed="true"
        >
          <NavbarBrand href="/"><span className="fn-text l-grey">FN DataHub</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem
                onClick={() => this.setActiveTitle("store")}
                active={this.isActive("store")}
              >
                <NavLink tag={RRNavLink} to="/" >
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    pull="left"
                    color="#e74c3c"
                    className="padd-right-5 icon-style"
                  />
                  <span className="fn-text l-grey">Daily Store</span>
                </NavLink>
              </NavItem>
              <NavItem
                onClick={() => this.setActiveTitle("upcoming")}
                active={this.isActive("upcoming")}
              > 
                <NavLink tag={RRNavLink} to="/upcoming">
                  <FontAwesomeIcon
                    icon={faEye}
                    pull="left"
                    color="#bdc3c7"
                    className="padd-right-5 icon-style"
                  />
                   <span className="fn-text l-grey">Upcoming Items</span>
                </NavLink>
              </NavItem>
              <NavItem
                onClick={() => this.setActiveTitle("news")}
                active={this.isActive("news")}
              >
                <NavLink tag={RRNavLink} to="/news">
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    pull="left"
                    color="#f1c40f"
                    className="padd-right-5 icon-style"
                  />
                    <span className="fn-text l-grey">News</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustNavbar;
