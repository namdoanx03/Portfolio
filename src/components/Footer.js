import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="d-flex justify-content-center align-items-center w-100 mt-5">
        <Col xs="12" className="footer-copywright text-center">
          <h3>
            Copyright © {year} Namdoanx. Made with{" "}
            <span
              style={{
                color: "#e25555",
              }}
            >
              ♥
            </span>{" "}
            in VietNam
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
