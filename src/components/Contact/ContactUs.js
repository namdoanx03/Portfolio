import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from '../../content-options' 
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success'); // or 'danger' for error

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l2n672y",
        "template_skkfqgg",
        form.current,
        "AL_QeDqTX3JiynBHD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setAlertMessage("Email sent successfully!");
          setAlertVariant("success");
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("Error sending email!");
        }
      );
  };

  const handleAlertClose = () => {
        setAlertMessage('');
    };

  const handleChange = (e) => {
    e.preventDefault();
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };
  return (
    <Container style={{ paddingTop: "0px", marginTop: "0px" }} id="contactme">
      <Row className="mb-5 mt-5">
        <Col lg="8">
          <h1
            className="display-4 mb-4 "
            style={{ paddingTop: "80px", color: "white" }}
          >
            Contact <strong className="purple">Me</strong>
            <span class="wave">👋</span>
          </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp" style={{ color: "white", borderRadius: "20px" }}>
        <Col lg="5" className="mb-5">
          <h3
            className="color_sec py-4"
            style={{ fontSize: "35px", fontFamily: "courier" }}
          >
            Get in touch
          </h3>
          <address style={{ fontSize: "20px", fontFamily: "courier" }}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`} color="purple">
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p style={{ fontFamily: "courier", fontSize: "20px" }}>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <Typewriter
            options={{
              strings: ["Let's do something great together! 🏆"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              cursor: "_",
              wrapperClassName: "Typewriter__string",
              cursorClassName: "Typewriter__cursor_contact",
              stringClassName: "Typewriter-string",
            }}
          />
          <br />
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/namdoanx03"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/namdoanx03"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:namdoan9a1.1718@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/namdoaxn/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form
            ref={form}
            className="contact__form w-100"
            style={{ color: "white", borderRadius: "100px" }}
            onSubmit={sendEmail}
          >
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  type="text"
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    color: "black",
                  }}
                  required
                  onChange={handleChange}
                  value={formData.user_name}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="user_email"
                  placeholder="Email"
                  type="email"
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    color: "black",
                  }}
                  required
                  onChange={handleChange}
                  value={formData.user_email}
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              style={{
                background: "white",
                borderRadius: "20px",
                color: "black",
              }}
              required
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button
                  className="btn ac_btn mt-2 mb-5"
                  type="submit"
                  style={{ background: "white", borderRadius: "20px" }}
                >
                  Send <IoSend style={{ marginRight: "5px" }} />
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      {alertMessage && (
        <Row>
          <Col lg="12">
            <Alert
              variant={alertVariant}
              onClose={handleAlertClose}
              dismissible
            >
              {alertMessage}
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}
export default ContactUs