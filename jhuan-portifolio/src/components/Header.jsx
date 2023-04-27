import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar className="nav-bar" collapseOnSelect expand="lg">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/skills">Habilidades</Nav.Link>
            <Nav.Link href="/project">Projetos</Nav.Link>
          </Nav>
          <Nav className="align-social-media">
            <a
              href="https://www.linkedin.com/in/mateus-walz-b40866137/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="social-media-link"
            >
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-walz-b40866137/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="social-media-link"
            >
              <FaFacebook size={30} color="#1877F2" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-walz-b40866137/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="social-media-link"
            >
              <FaGithub size={30} color="#211F1F" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-walz-b40866137/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
              className="social-media-link"
            >
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
