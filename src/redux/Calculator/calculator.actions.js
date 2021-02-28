import CalculatorTypes from "./calculator.types";

export const append = (item) => {
  return {
    type: CalculatorTypes.APPEND,
    payload: item,
  };
};

export const twoElements = (item) => {
  //   console.log("symbol>>", item);
  return {
    type: CalculatorTypes.TWO_ELEMENTS,
    payload: item,
  };
};

export const clear = () => {
  return {
    type: CalculatorTypes.CLEAR,
  };
};

export const clearEntry = () => {
  return {
    type: CalculatorTypes.CLEAR_ENTRY,
  };
};

export const backSpace = () => {
  return {
    type: CalculatorTypes.BACK_SPACE,
  };
};

export const plusMinus = () => {
  return {
    type: CalculatorTypes.PLUS_MINUS,
  };
};

export const percent = () => {
  return {
    type: CalculatorTypes.PERCENT,
  };
};

export const reciprocal = () => {
  return {
    type: CalculatorTypes.RECIPROCAL,
  };
};

export const square = () => {
  return {
    type: CalculatorTypes.SQUARE,
  };
};

export const squareRoot = () => {
  return {
    type: CalculatorTypes.SQUAREROOT,
  };
};

export const equalsTo = () => {
  return {
    type: CalculatorTypes.EQUALS_TO,
  };
};
