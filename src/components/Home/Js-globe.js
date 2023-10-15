import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
function JsGlobe() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/106/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.4.0/Tween.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.3.2/fabric.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.0.4/chroma.min.js"></script>
      <script src="../../../public/libs/THREE.MeshLine.js"></script>
      <script src="https://d3js.org/d3-array.v1.min.js"></script>
      <script src="https://d3js.org/d3-geo.v1.min.js"></script>
      <script src="../../../public/libs/orbit-controls.js"></script>
      <script src="libs/trackball-controls.js"></script>
      <script src="libs/perlin-noise.js"></script>

      <script src="assets/data/processing.js"></script>

      <script src="../../../public/scripts/config.js"></script>
      <script src="../../../public/scripts/app.js"></script>
      <script src="../../../public/scripts/shaders.js"></script>
      <script src="../../../public/scripts/index.js"></script>
      <script src="../../../public/assets/data/countries.js"></script>
      <script src="../../../public/assets/data/connections.js"></script>
      <script src="../../../public/assets/data/grid.js"></script>
      <script src="../../../public/scripts/globe.js"></script>
      <script src="../../../public/scripts/points.js"></script>
      <script src="../../../public/scripts/marker.js"></script>
      <script src="../../../public/scripts/markers.js"></script>
      <script src="../../../public/scripts/lines.js"></script>
      <script src="../../../public/scripts/dots.js"></script>
      <script src="../../../public/scripts/camera.js"></script>

      <script src="scripts/utils.js"></script>
    </div>
  );
}
ReactDOM.render(<JsGlobe />, document.getElementById('root'));

export default JsGlobe;
