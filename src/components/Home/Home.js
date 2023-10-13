import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Globe from "./Globe";
import Type from "./Type";
import ufo from "../../Assets/Images/ufo.png";
function Home() {
  return (
    <section>
      <Home3 />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👽
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KHOA NGUYEN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="up-down">
              <img
                src={ufo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "5em" }}>
          <Home2 />
        </Container>
        <Container>
          <Globe />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
