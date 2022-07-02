import React from "react";

function SingleQuestion({choice1, choice2, choice3}) {
  return (
    <div className="question">
      <h3>What if I wanted?</h3>
      <div className="options-container">
        <button className="option">{choice1}</button>
        <button className="option">{choice2}</button>
        <button className="option">{choice3}</button>
      </div>
    </div>
  );
}

export default SingleQuestion
