import React from "react";
import { useState } from "react";
import "./ShapeMaker.css";

function ShapeMaker() {
  const [diameter, setDiameter] = useState(0);
  //   let styles = {{height: 100, width: 100, bakground: "blue"}};
  const [circle, setCircle] = useState(false);
  return (
    <div>
      <label>
        <input
          type="number"
          onChange={(event) => {
            //   console.log(event.target.valueAsNumber); //gives us the number in the input
            setDiameter(event.target.valueAsNumber);
          }}
        />
        Diameter
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(event) => {
                setCircle(event.target.checked);
          }}
        />
        Is Circle?
      </label>
      <div style={{ height: diameter, width: diameter, background: "blue" }} className={circle ? "circle" : ""}>
        
      </div>
    </div>
  );
}

export default ShapeMaker;
