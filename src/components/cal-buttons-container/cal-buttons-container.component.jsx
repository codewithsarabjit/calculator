import React from "react";

import "./cal-buttons-container.styles.scss";

import CalButton from "../cal-button/cal-button.component";

class CalButtonsContainer extends React.Component {
  constructor() {
    super();

    const buttonsArr = {
      percent: {
        id: 1,
        symbol: "%",
        formula: "PERCENT",
      },
      ce: {
        id: 2,
        symbol: "CE",
        formula: "CLEAR_ENTRY",
      },
      c: {
        id: 3,
        symbol: "C",
        formula: "CLEAR",
      },
      backspace: {
        id: 4,
        symbol: "back",
        formula: "BACK_SPACE",
      },
      ratio: {
        id: 5,
        symbol: "1/x",
        formula: "RECIPROCAL",
      },
      square: {
        id: 6,
        symbol: "x2",
        formula: "SQUARE",
      },
      root2: {
        id: 7,
        symbol: "root 2",
        formula: "SQUAREROOT",
      },
      division: {
        id: 8,
        symbol: "/",
        value: "DIVIDE",
        formula: "TWO_ELEMENTS",
      },
      seven: {
        id: 9,
        symbol: "7",
        formula: "APPEND",
      },
      eight: {
        id: 10,
        symbol: "8",
        formula: "APPEND",
      },
      nine: {
        id: 11,
        symbol: "9",
        formula: "APPEND",
      },
      multiply: {
        id: 12,
        symbol: "X",
        value: "MULTIPLY",
        formula: "TWO_ELEMENTS",
      },
      four: {
        id: 13,
        symbol: "4",
        formula: "APPEND",
      },
      five: {
        id: 14,
        symbol: "5",
        formula: "APPEND",
      },
      six: {
        id: 15,
        symbol: "6",
        formula: "APPEND",
      },
      subtract: {
        id: 16,
        symbol: "-",
        value: "SUBTRACT",
        formula: "TWO_ELEMENTS",
      },
      one: {
        id: 17,
        symbol: "1",
        formula: "APPEND",
      },
      two: {
        id: 18,
        symbol: "2",
        formula: "APPEND",
      },
      three: {
        id: 19,
        symbol: "3",
        formula: "APPEND",
      },
      plus: {
        id: 20,
        symbol: "+",
        value: "ADD",
        formula: "TWO_ELEMENTS",
      },
      plusminus: {
        id: 21,
        symbol: "+/-",
        formula: "PLUS_MINUS",
      },
      zero: {
        id: 22,
        symbol: "0",
        formula: "APPEND",
      },
      dot: {
        id: 23,
        symbol: ".",
        formula: "APPEND",
      },
      equalto: {
        id: 24,
        symbol: "=",
        formula: "EQUALS_TO",
      },
    };

    this.state = { buttonsArr: Object.values(buttonsArr) };
  }

  render() {
    return (
      <div className="buttons-container">
        <div className="buttons-wrap">
          {this.state.buttonsArr.map(({ id, ...otherBtnProps }) => (
            <CalButton key={id} {...otherBtnProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default CalButtonsContainer;
