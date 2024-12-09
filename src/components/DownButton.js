import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { AiFillDownCircle } from "react-icons/ai";
function DownButton({ scrollToElement, offsetElement }) {
  // State variables
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  // Scroll event handler
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  // Attach scroll event listener
  window.addEventListener("scroll", scrollHandler);
  // Return JSX
  return (
    <Row className="scroll-icon">
      <ScrollLink
        style={{ color: "white", paddingTop: "30px" }}
        activeClass="active"
        to={scrollToElement}
        spy={true}
        smooth={true}
        offset={offsetElement}
        duration={500}
        onClick={() => updateExpanded(false)}
      >
        <AiFillDownCircle
          style={{ color: "purple", marginTop: "-10px" }}
          size={35}
        />
      </ScrollLink>
    </Row>
  );
}
export default DownButton;
