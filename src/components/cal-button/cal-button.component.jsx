import React from "react";

import "./cal-button.styles.scss";

import { connect } from "react-redux";

import {
  append,
  clear,
  clearEntry,
  backSpace,
  plusMinus,
  twoElements,
  percent,
  equalsTo,
  reciprocal,
  square,
  squareRoot,
} from "../../redux/Calculator/calculator.actions";

const CalButton = (props) => {
  const { symbol, formula, value } = props;

  var $render = "";

  switch (formula) {
    case "APPEND":
      $render = (
        <div
          className="blocks"
          onClick={() => props.append({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "CLEAR":
      $render = (
        <div
          className="blocks"
          onClick={() => props.clear({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "CLEAR_ENTRY":
      $render = (
        <div
          className="blocks"
          onClick={() => props.clearEntry({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "BACK_SPACE":
      $render = (
        <div
          className="blocks"
          onClick={() => props.backSpace({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "TWO_ELEMENTS":
      $render = (
        <div
          className="blocks"
          onClick={() => props.twoElements({ symbol, formula, value })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "PLUS_MINUS":
      $render = (
        <div
          className="blocks"
          onClick={() => props.plusMinus({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "PERCENT":
      $render = (
        <div
          className="blocks"
          onClick={() => props.percent({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "RECIPROCAL":
      $render = (
        <div
          className="blocks"
          onClick={() => props.reciprocal({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "SQUARE":
      $render = (
        <div
          className="blocks"
          onClick={() => props.square({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "SQUAREROOT":
      $render = (
        <div
          className="blocks"
          onClick={() => props.squareRoot({ symbol, formula })}
        >
          {props.symbol}
        </div>
      );
      break;

    case "EQUALS_TO":
      $render = (
        <div className="blocks" onClick={() => props.equalsTo()}>
          {props.symbol}
        </div>
      );
      break;

    default:
      $render = <div className="blocks">{props.symbol}</div>;
      break;
  }

  return $render;
};

const mapDispatchToProps = (dispatch) => ({
  append: (item) => dispatch(append(item)),
  clear: () => dispatch(clear()),
  clearEntry: () => dispatch(clearEntry()),
  backSpace: () => dispatch(backSpace()),
  plusMinus: () => dispatch(plusMinus()),
  twoElements: (item) => dispatch(twoElements(item)),
  percent: () => dispatch(percent()),
  reciprocal: () => dispatch(reciprocal()),
  square: () => dispatch(square()),
  squareRoot: () => dispatch(squareRoot()),
  equalsTo: (item) => dispatch(equalsTo(item)),
});

export default connect(null, mapDispatchToProps)(CalButton);
