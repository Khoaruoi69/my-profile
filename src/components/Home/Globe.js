import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import JsGlobe from "./Js-globe";

function Globe() {
  return (
    <div>
      <JsGlobe/>
    </div>
  );
}
ReactDOM.render(<JsGlobe />, document.getElementById('root'));
export default Globe;