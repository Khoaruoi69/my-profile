import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ninhBinh from "../../Assets/Projects/Parallax-in-web-design.png";
import microService from "../../Assets/Projects/microservice.png";
import Kafka from "../../Assets/Projects/kafka.png";
import Co2 from "../../Assets/Projects/Co2Manager.png";
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
              imgPath={ninhBinh}
              isBlog={false}
              title="Parallax-travel"
              description="In computer graphics and web design, parallax is applied to create a similar effect in two-dimensional space. Specifically, it is used to create a sense of depth and motion on websites. Different layers of images or content move at different speeds as users scroll through the website. This produces a dynamic visual experience, often used to highlight important elements, tell a story, or showcase products on a website."
              ghLink="https://github.com/Khoaruoi69/parallax-travel?tab=readme-ov-file"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microService}
              isBlog={false}
              title="Spring Boot Microservices Project"
              description="Services I'm going build: Product Service - Create and View Products, acts Product Catalog. Order Service - Can Order Products. Inventory Service- Can check If product is stock or not. Notification Service - Can send notification, after order is places. Order Service, Inventory Service and Notification Service Service are going to interact with each other. Synchronous and Asynchronous Communication."
              ghLink="https://github.com/Khoaruoi69/microservice-project?tab=readme-ov-file"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kafka}
              isBlog={false}
              title="Kafka Project"
              description="Kafka is an open-source distributed data streaming platform developed by the Apache Software Foundation. It enables your applications to send and process large volumes of real-time information efficiently. Kafka is designed to handle large data streams and address the challenge of processing a significant amount of information in a short period. It is widely used in Big Data applications such as online storage, data analysis, and event processing."
              ghLink="https://github.com/Khoaruoi69/Kafka-project"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Co2}
              isBlog={false}
              title=" CO2 Management System"
              description="CO2 Management System is a system for measuring greenhouse gas emissions from industrial facilities within an industrial park. It allows users to view various types of charts, including line charts, bar charts, annual charts, monthly charts, daily charts, and hourly charts, as well as combining these charts to provide a more visual representation of the data for users."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Co2}
              isBlog={false}
              title=" CO2 Management System"
              description="CO2 Management System is a system for measuring greenhouse gas emissions from industrial facilities within an industrial park. It allows users to view various types of charts, including line charts, bar charts, annual charts, monthly charts, daily charts, and hourly charts, as well as combining these charts to provide a more visual representation of the data for users."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Co2}
              isBlog={false}
              title=" CO2 Management System"
              description="CO2 Management System is a system for measuring greenhouse gas emissions from industrial facilities within an industrial park. It allows users to view various types of charts, including line charts, bar charts, annual charts, monthly charts, daily charts, and hourly charts, as well as combining these charts to provide a more visual representation of the data for users."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
