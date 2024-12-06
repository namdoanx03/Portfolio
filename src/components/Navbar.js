import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineProject,
  AiFillMessage,
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{ paddingTop: "10px" }}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                activeClass="active"
                style={{ color: "white", paddingTop: "100px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px" }}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px" }}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px" }}
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px" }}
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <TbCertificate style={{ marginBottom: "2px" }} /> Certificates
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px" }}
                activeClass="active"
                to="contactme"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMessage style={{ marginBottom: "2px" }} /> Contact
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
