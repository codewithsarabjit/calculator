import React from "react";

import "./cal-container.styles.scss";

import CalDisplay from "../cal-display/cal-display.component";
import CalButtonsContainer from "../cal-buttons-container/cal-buttons-container.component";

const CalContainer = () => {
  return (
    <div className="cal-container">
      <h2>CALCULATOR</h2>
      <CalDisplay />
      <CalButtonsContainer />
    </div>
  );
};

export default CalContainer;
