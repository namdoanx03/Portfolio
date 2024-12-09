import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import DownButton from "../DownButton";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container id="home2">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a student studying information technology at PTIT (Posts and
              Telecommunications Institute of Technology), Hanoi, Vietnam. I am
              passionate about finding creative solutions to
              <i>
                <b className="purple"> real world problems. </b>
              </i>
              I especially enjoy applying technology to tasks that I realize can
              be automated.
              <br />
              Whenever possible, I also learn new things and use them to improve
              my skills, both technical and soft.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/namdoanx03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub size={25} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/namdoaxn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={25} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@namdoanx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTiktok size={25} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <DownButton
          scrollToElement="about"
          offsetElement={110}
          style={{ paddingTop: "30px" }}
        />
      </Container>
    </Container>
  );
}
export default Home2;
