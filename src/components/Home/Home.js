import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillDownCircle } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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

  const showScrollIcon = () => {
    const scrolled = window.scrollY;
    return scrolled <= 200;
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
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
            <Row
              className={`scroll-icon ${
                showScrollIcon ? "" : "hide-scroll-icon"
              }`}
            >
              <p> </p>
            </Row>
            <Row
              className={`scroll-icon ${
                showScrollIcon ? "" : "hide-scroll-icon"
              }`}
            >
              <p> </p>
            </Row>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
