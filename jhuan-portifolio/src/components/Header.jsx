import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { pages, socialMedias } from "../utils/constants";

import "../styles/Header.css";

const Header = ({ isNavbarCollapsed, handleNavbarCollapse }) => {
  const handleToggleCollapse = () => {
    handleNavbarCollapse(!isNavbarCollapsed);
  };

  return (
    <Navbar
      id="nav"
      className={`nav-bar ${isNavbarCollapsed ? "collapsed" : ""}`}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link to={{ pathname: "/" }}>
            <div className="profile-image-container">
              <img
                className="profile-image"
                src="https://scontent.fjoi5-1.fna.fbcdn.net/v/t1.6435-9/76896577_165727937821594_9185171188974878720_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeECcbM-9Pp8CehbYQucwchSVl62QU11azNWXrZBTXVrM2pLUOQ0J5zFeb1M7IvkaWg7FNblVwwzANHEobvTXSTi&_nc_ohc=EdKrNiJEI9cAX9IL99S&_nc_pt=1&_nc_ht=scontent.fjoi5-1.fna&oh=00_AfCNwoIhFipdLt5bgwpqq6zfYWh19BvEqQXxiitSt63Zww&oe=64721C6C"
                alt=""
                title="Jhuan Gabriel Souza"
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleCollapse}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {pages.map((item) => (
              <Nav.Link href={item.link}>{item.title}</Nav.Link>
            ))}
          </Nav>
          <Nav className="align-social-media">
            {socialMedias.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="social-media-link"
              >
                {item.icon}
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
