import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bookshop from "../../Assets/Projects/bookshop.png";
import hospital from "../../Assets/Projects/hospital.png";
import quizPrj from "../../Assets/Projects/quizPrj.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { AiFillDownCircle } from "react-icons/ai";
import DownButton from "../DownButton";

const Projects = () => {
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
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "0px",
            paddingTop: "0px",
            marginTop: "0px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management Website"
              // description="Include patient record management, appointment scheduling, doctor-patient communication, billing, and reporting. Built with a user-friendly interface, the website enhances administrative efficiency and improves the overall patient experience."
              ghFont="https://github.com/namdoanx03/Schedule-A-Medical-Examination-Frontend"
              demoLink="https://github.com/namdoanx03/Schedule-A-Medical-Examination-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshop}
              isBlog={false}
              title="Shop Book Website"
              // description="Use Face recognition for attendance in class, company,... If anyone not present in the class more than 2 times, it will automatically send an email to notice. "
              ghLink="https://github.com/namdoanx03/ShopBook"
              demoLink="https://github.com/namdoanx03/ShopBook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizPrj}
              isBlog={false}
              title="Quiz Project"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/namdoanx03/DuAnQuiz"
              demoLink="https://github.com/namdoanx03/DuAnQuiz"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
        <DownButton
          scrollToElement="certificates"
          offsetElement={-30}
          style={{ paddingTop: "0px", marginTop: "0px" }}
        />
      </Container>
    </Container>
  );
}

export default Projects;
