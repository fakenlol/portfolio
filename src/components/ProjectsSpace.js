import { Project } from "./Project";
import Nav from "react-bootstrap/Nav";
import "../stylesheets/ProjectsSpace.css";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logoProjects from "../imgs/Projects.svg";

export function ProjectsSpace() {
  return (
    <div className="projects-space">
      <Nav className="projects-logo">
        <Nav.Item>
          <Image src={logoProjects} fluid/>
        </Nav.Item>
      </Nav>
      <Container className="projects-land">
        <Project
          image="asterisk"
          ext="svg"
          name="Technology commerce"
          desc="This is a school project done by 4 people that I worked on. Basically it is a commerce like Amazon or eBay but oriented to IT stuff." />
        <Project
          image="asterisk"
          ext="svg"
          name="Technology commerce"
          desc="This is a school project done by 4 people that I worked on. Basically it is a commerce like Amazon or eBay but oriented to IT stuff." />
      </Container>
    </div>
  );
}