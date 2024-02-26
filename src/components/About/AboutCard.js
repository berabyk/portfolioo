import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bera Bıyık </span>
            <br />
            <br />
            As a recent computer engineering graduate with a year of experience in Frontend Development, my journey initially began by developing web frontend projects. However, my path has shifted towards Flutter, where I actively contribute to the development of cross-platform applications.
            <br />
            <br />
            Proficient in creating customized user experiences, I bring a year of practical experience and a strong analytical mindset to my Flutter applications. Eager to continually enhance my skills, I remain dedicated to learning and hands-on application development in the ever-evolving world of Flutter.
            <br />
            <br />
            My career goal is to become an advanced Flutter Developer, staying abreast of the latest technologies and trends while delivering impressive user experiences. I thrive in collaborative environments and am enthusiastic about actively contributing to innovative teams focused on continuous learning.
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
