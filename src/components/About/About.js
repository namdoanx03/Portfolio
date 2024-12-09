import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { AiFillDownCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import DownButton from "../DownButton";

const About = () => {
   const [showScrollIcon, setShowScrollIcon] = useState(true);
   const handleScroll = () => {
     // Xác định vị trí cuộn và ẩn hiển thị của icon
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
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <DownButton
          scrollToElement="tech"
          offsetElement={-110}
          style={{ paddingTop: "-10px" }}
        />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack id="tech" />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        <DownButton scrollToElement="projects" offsetElement={-30} />
      </Container>
    </Container>
  );
}

export default About;
