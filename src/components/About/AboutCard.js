import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImHappy, ImHappy2, ImSmile } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khoa Nguyen </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am software engineer at company Bstar Solutions.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImHappy />  Dopt fish
            </li>
            <li className="about-activity">
              <ImHappy2 />  Playing Games
            </li>
            <li className="about-activity">
              <ImSmile /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to make a difference through every line of code!"{" "}
          </p>
          <footer className="blockquote-footer">Khoa Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
