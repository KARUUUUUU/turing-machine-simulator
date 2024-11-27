import React from "react";
import "../css_files/Tape.css";

const Tape = ({ tape, headPosition }) => {
  return (
    <div className="tape-container" role="grid" aria-label="Turing Machine Tape">
      {tape.map((cell, index) => (
        <div
          key={index}
          className={`tape-cell ${headPosition === index ? "highlighted" : ""}`}
          role="gridcell"
          aria-label={`Cell ${index}, ${headPosition === index ? "Head position" : "Value: " + cell}`}
          aria-live={headPosition === index ? "assertive" : "off"}  // Dynamically update the live region for the head position
        >
          {cell || "_"} {/* Displays an underscore for empty cells */}
        </div>
      ))}
    </div>
  );
};

export default Tape;


  