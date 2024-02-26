import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImg from "../../Assets/cvfoto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> WHO </span> AM I
            </h1>
            <p className="home-about-body">
              Passionate creator driven by innovation and curiosity.
              <br />
              <br />
              Enthusiastic about blending technology and creativity.
              <br />
              <br />
              I am fluent in 
              <i>
                <b className="purple"> Dart (Flutter), Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Cross Platform Mobile Applications</b> and
                also in areas related to {" "}
                <b className="purple">
                Web Technologies and Products
                </b>
              </i>
              <br />
              <br />
              I am also learning <b className="purple">Java Spring Boot</b> and
              <i>
                <b className="purple">
                  {" "}
                  other backend technologies
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> MySQL, Firebase, Kubernetes </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="avatar" roundedCircle />
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
                  href="https://github.com/berabyk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/berabyk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
