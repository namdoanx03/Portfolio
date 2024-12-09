import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { SiCodereview } from "react-icons/si";
import cv from "../../Assets/cv.png";
import { pdfjs } from "react-pdf";
import CVfind from '../../Assets/resume_detail.png'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



const  ResumeNew = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        <Row>
          <p className="resume-title" style={{ fontSize: "2.5em" }}>
            My <span className="purple"> Resume</span>
          </p>
          <br />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={7} style={{ textAlign: "center", paddingLeft: "50px" }}>
            <p> Resume Preview </p>
            <img
              src={cv}
              alt="resume"
              style={{ maxWidth: "100%", marginLeft: "50px" }}
            />
          </Col>
          <Col
            md={5}
            style={{
              alignSelf: "center",
              paddingRight: "50px",
              textAlign: "center",
            }}
          >
            <Row className="align-items-center justify-content-center">
              <img
                src={CVfind}
                style={{ maxWidth: "55%" }}
                alt="resume details"
              />
            </Row>
            <Row
              className="align-items-center justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{
                  maxWidth: "250px",
                  paddingTop: "10px",
                  marginTop: "20px",
                  maxHeight: "50px",
                }}
              >
                <SiCodereview />
                &nbsp;View full resume
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
