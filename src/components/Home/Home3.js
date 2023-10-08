import React, { useEffect } from "react";
import start from "../../Assets/Images/stars.png"
import moon from "../../Assets/Images/moon.png"
import bh_mountains from "../../Assets/Images/mountains_behind.png"
import front_moutaints from "../../Assets/Images/mountains_front.png"
import "../../style/Home3.css";
import Introduction from "./Introduction";

function Home3() {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_front = document.getElementById("mountains_front");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_behind.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      text.style.marginRight = value * 4 + "px";
      text.style.marginTop = value * 1.5 + "px";
      btn.style.marginTop = value * 1.5 + "px";
      header.style.top = value * 0.5 + "px";
    });
  }, []);

  return (
    <>
      <section_animation>
        <img src={start} id="stars" alt="stars" />
        <img src={moon} id="moon" alt="moon" />
        <img src={bh_mountains} id="mountains_behind" />
        <div style={{  textAlign: "left",marginBottom: "8em", marginLeft: "1em" }}>
                <Introduction />
              </div>
        {/* <h1 style={{ marginBottom: "5em" }}  id="text">Khoa.nguyen</h1> */}
        <img src={front_moutaints} id="mountains_front" />
      </section_animation>
    </>
  );
}

export default Home3;