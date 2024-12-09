import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertCards from "./CertCards";
import UXDesign from '../../Assets/Certs/uxdesign.jpeg'
import ProjectManage from "../../Assets/Certs/prjmanage.jpeg";
import { AiFillDownCircle } from "react-icons/ai";
import DownButton from "../DownButton";

const Cert = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 200) {
      setShowScrollIcon(false);
    } else {
      setShowScrollIcon(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="project-section" id="certificates">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of my certifications i achieved in the last year.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={UXDesign}
              isBlog={false}
              title="Google Project Management"
              description="I learned this course in Grow with Google - Accelerate Vietnam Digital Talent program.In this course, i learned how to use python to develop scripts and automate task. I also learned how to use selenium to automate web application. "
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={UXDesign}
              isBlog={false}
              title="Google UX Design"
              description="A course sponsored by SAMSUNG Vietnam. I learned algorithms such as dynamic programming, backtracking... and how to apply it in practice."
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={UXDesign}
              isBlog={false}
              title="TOEIC Listening and Reading"
              description="I learned how to use English to comunicate with people.It helps me gain more reading comprehension skills and watch videos in English, which is very important when learning new knowledge from YouTube videos. "
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={ProjectManage}
              isBlog={false}
              title="Student with 5 good merits"
              description="The certificate is awarded to students who meet good standards in 5 areas: study, ethics, physical fitness, volunteering, and integration."
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={ProjectManage}
              isBlog={false}
              title="Media support - JuntionXHanoi 2023"
              description="I became the media ambassador of hackathon JuntionXHanoi 2023. I participated in posting content and communication for the event."
            />
          </Col>
        </Row>
        <DownButton scrollToElement="resume" offsetElement={-30} />
      </Container>
    </Container>
  );
}
export default Cert;
