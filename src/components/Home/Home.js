import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillDownCircle } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";

const Home = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // Clean the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during mount

  return (
    <section id="home">
      <Container fluid className="home-section">
        <Particle />
        <Container
          className="home-content"
          style={{ paddingTop: "-100px", marginTop: "-50px" }}
        >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DOAN PHUONG NAM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Row className="scroll-icon">
          <ScrollLink
            style={{ color: "white", paddingTop: "80px" }}
            activeClass="active"
            to="contactme"
            spy={true}
            smooth={true}
            offset={80}
            duration={500}
            onClick={() => updateExpanded(false)}
          >
            <AiFillDownCircle
              style={{ color: "purple", marginTop: "40px" }}
              size={35}
              className="scroll-icon-icon" /* Assign a unique class for styling */
            />
          </ScrollLink>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
