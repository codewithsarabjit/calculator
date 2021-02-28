import React from "react";

import "./cal-display.styles.scss";

import { connect } from "react-redux";

const CalDisplay = (props) => {
  return (
    <div className="display">
      <span className="previousValue">
        {props.previousValue !== "" ? props.previousValue : ""}
      </span>
      <span className="formula">
        {props.formula !== "" ? props.formula : ""}
      </span>
      <span className="displayValue">{props.displayValue}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayValue: state.calculator.displayValue,
    previousValue: state.calculator.elementOne,
    formula: state.calculator.formula,
  };
};

export default connect(mapStateToProps, null)(CalDisplay);
