import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DownButton from "../DownButton";
import gif from "../../Assets/giphy.gif";

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
    <Container fluid className="home-section" id="home">
      <Container fluid>
        <Container
          className="home-content"
          style={{
            paddingTop: "-100px",
            marginTop: "-50px",
            marginBottom: "0px",
          }}
        >
          <Row>
            <Col md={6} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "2.5em" }}
                className="heading"
              >
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
            <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={gif}
                className="img-fluid"
                alt="home pic"
                style={{ width: "90%", height: "90%" }}
              />
            </Col>
          </Row>
        </Container>
        <DownButton
          scrollToElement="home2"
          offsetElement={20}
          style={{ paddingTop: "30px" }}
        />
      </Container>
      <Home2 />
      <Particle />
    </Container>
  );
}

export default Home;
