import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gymapp from "../../Assets/Projects/gymapp.png";
import intramuscular from "../../Assets/Projects/intramuscular.png";
import leopold from "../../Assets/Projects/leopold.png";
import subcutan from "../../Assets/Projects/subcutan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymapp}
              isBlog={false}
              title="Mobile Sport App"
              description="Sports App Mobil app for our customer personal app. Users can watch gym examples in app with mounthly cost. They can save gym examples for reach them easily. Users also get some sport and diet advices. Developed with Flutter framework. Used Firebase on the database side."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subcutan}
              isBlog={false}
              title="Subcutaneous administration"
              description="Developed 3D interactive website for nursing students. Used HTML, CSS, JavaScript each of them. Used Javascript libraries Three.js for scene and interactions, GSAP for camera movement and Swiper.js for sliders. Also used Tailwindcss as css framework."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intramuscular}
              isBlog={false}
              title="Intramuscular injection"
              description="Developed 3D interactive website for nursing students. Used HTML, CSS, JavaScript each of them. Used Javascript libraries Three.js for scene and interactions, GSAP for camera movement and Swiper.js for sliders. Also used Tailwindcss as css framework."      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leopold}
              isBlog={false}
              title="Leopold's Maneuvers"
              description="Developed 3D interactive website for nursing students. Used HTML, CSS, JavaScript each of them. Used Javascript libraries Three.js for scene and interactions, GSAP for camera movement and Swiper.js for sliders. Also used Tailwindcss as css framework."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;