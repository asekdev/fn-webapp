import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingBag, faChartPie, faThLarge, faStar, faEye, faNewspaper} from '@fortawesome/free-solid-svg-icons'
  import {Link as RRNavLink} from 'react-router-dom';

class CustNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeTile: 'player'
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  isActive = activeItem => {
      return activeItem === this.state.activeTile;
  }

  setActiveTitle = name => {
    this.setState({
        activeTile: name,
        isOpen: false
    })
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: "#2c3e50"}} dark expand="lg" fixed="true">
          <NavbarBrand href="/">Fortnite DataHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
           <NavItem onClick={() => this.setActiveTitle("player-stats")} active={this.isActive("player-stats")}>
           <NavLink tag={RRNavLink} to="/" >
                <FontAwesomeIcon icon={faChartPie} pull="left" color="#3498db" className="padd-right-5 marg-top-5"/>
                Player Stats
              </NavLink>
           </NavItem>
           <NavItem onClick={() => this.setActiveTitle("store")} active={this.isActive("store")}>
              <NavLink tag={RRNavLink} to="/store">
                <FontAwesomeIcon icon={faShoppingBag} pull="left" color="#e74c3c" className="padd-right-5 marg-top-5"/>
                Daily Store
              </NavLink>
              </NavItem>
              <NavItem onClick={() => this.setActiveTitle("items")} active={this.isActive("items")}>
              <NavLink tag={RRNavLink} to="/store">
                <FontAwesomeIcon icon={faThLarge} pull="left" color="#2ecc71" className="padd-right-5 marg-top-5"/>
                Items
              </NavLink>
              </NavItem>
              <NavItem onClick={() => this.setActiveTitle("challenges")} active={this.isActive("challenges")}>
              <NavLink tag={RRNavLink} to="/store">
                <FontAwesomeIcon icon={faStar} pull="left" color="#9b59b6" className="padd-right-5 marg-top-5"/>
                Challenges
              </NavLink>
              </NavItem>
              <NavItem onClick={() => this.setActiveTitle("upcoming")} active={this.isActive("upcoming")}>
              <NavLink tag={RRNavLink} to="/store">
                <FontAwesomeIcon icon={faEye} pull="left" color="#bdc3c7" className="padd-right-5 marg-top-5"/>
               Upcoming Items
              </NavLink>
              </NavItem>
              <NavItem onClick={() => this.setActiveTitle("news")} active={this.isActive("news")}>
              <NavLink tag={RRNavLink} to="/store">
                <FontAwesomeIcon icon={faNewspaper} pull="left" color="#f1c40f" className="padd-right-5 marg-top-5"/>
                News
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