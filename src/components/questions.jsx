import React from "react";
import SingleQuestion from "./single-question";

function Questions() {
  return (
    <div className="column small">
      <div id="quesHeader">
        <h2>Whatify was Today?</h2>
      </div>
      <div className="Questions-Container">
        <SingleQuestion
          color={"red"}
          choice1={"Something to drink with my coffee"}
          choice2={"What is I wanted something to bang my head to"}
          choice3={"Something to cry to"}
        />
        <SingleQuestion
          color={"red"}
          choice1={"Something to drink with my coffee"}
          choice2={"What is I wanted something to bang my head to"}
          choice3={"Something to cry to"}
        />
        <SingleQuestion
          color={"red"}
          choice1={"Something to drink with my coffee"}
          choice2={"What is I wanted something to bang my head to"}
          choice3={"Something to cry to"}
        />
        <SingleQuestion
          color={"red"}
          choice1={"Something to drink with my coffee"}
          choice2={"What is I wanted something to bang my head to"}
          choice3={"Something to cry to"}
        />
          <SingleQuestion
          color={"red"}
          choice1={"Something to drink with my coffee"}
          choice2={"What is I wanted something to bang my head to"}
          choice3={"Something to cry to"}
        />
      </div>
    </div>
  );
}

export default Questions;
