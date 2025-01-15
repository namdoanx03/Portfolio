import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertCards from "./CertCards";
import UXDesign from '../../Assets/Certs/UX_designer.png'
import ProjectManage from "../../Assets/Certs/project_management.png";
import AIPython from "../../Assets/Certs/AI_python.png";
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
              imgPath={ProjectManage}
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
              description="I learned this course in Grow with Google - Accelerate Vietnam Digital Talent program.In this course, i learned how to use python to develop scripts and automate task. I also learned how to use selenium to automate web application."
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={AIPython}
              isBlog={false}
              title="Google IT Automation with Python"
              description="I learned this course in Grow with Google - Accelerate Vietnam Digital Talent program.In this course, i learned how to use python to develop scripts and automate task. I also learned how to use selenium to automate web application. "
            />
          </Col>
        </Row>
        <DownButton scrollToElement="resume" offsetElement={-30} />
      </Container>
    </Container>
  );
}
export default Cert;
