import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgDetailsMore, CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height={250} style={{ objectFit: "contain" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}



        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}


        
      </Card.Body>

      <Card.Footer>
      {props.details && (
          <Button
            variant="primary"
            href={props.details}
            target="_blank"
            style={{marginBottom:"10px"}}
          >
            <CgDetailsMore /> &nbsp;
            {"Details"}
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
