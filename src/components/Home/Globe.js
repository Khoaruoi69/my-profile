import React, { useEffect } from "react";
import "../../style/globe.css";
function Globe() {
  return (
    <body-globe>
      <div id="controls-container">
        <canvas id="canvas"></canvas>
      </div>
    </body-globe>
  );
}

export default Globe;