import React from "react";
import "./Main.scss";
function Main() {
  return (
    <div className="mainContainer">
      <div>
        <div className="containers">
          <p>120 m</p>
        </div>
        <div className="containers">
          <p>120 m</p>
        </div>
        <div className="containers">
          <p>120 m</p>
        </div>
        <div className="containers">
          <p>120 m</p>
        </div>
      </div>
      <div className="buttonContaier">
        <div className="prevButton">
            <p>Prev</p>
        </div>
        <div className="nextButton">
            <p>Next</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
