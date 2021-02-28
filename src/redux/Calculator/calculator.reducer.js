import CalculatorTypes from "./calculator.types";

const INITIAL_STATE = {
  displayValue: 0,
  elementOne: "",
  formula: "",
  initNewValue: false,
};

function appendValue(state, newValue) {
  var updatedValue = 0;
  if (parseInt(state.displayValue) === 0) {
    updatedValue = newValue;
  } else {
    updatedValue = state.displayValue + newValue;
  }
  return updatedValue;
}

function calculateEqualsTo(state) {
  var updatedValue = 0;
  switch (state.formula) {
    case "ADD":
      updatedValue =
        parseFloat(state.elementOne) + parseFloat(state.displayValue);
      break;

    case "SUBTRACT":
      updatedValue =
        parseFloat(state.elementOne) - parseFloat(state.displayValue);
      break;

    case "MULTIPLY":
      updatedValue =
        parseFloat(state.elementOne) * parseFloat(state.displayValue);
      break;

    case "DIVIDE":
      updatedValue =
        parseFloat(state.elementOne) / parseFloat(state.displayValue);
      break;

    default:
      break;
  }
  return cleanNumber(updatedValue);
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function cleanNumber(displayValue) {
  return isFloat(displayValue)
    ? (Math.round(displayValue * 100) / 100).toFixed(2)
    : displayValue;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CalculatorTypes.APPEND:
      return {
        ...state,
        displayValue: state.initNewValue
          ? action.payload.symbol
          : appendValue(state, action.payload.symbol),
        initNewValue: false,
      };

    case CalculatorTypes.TWO_ELEMENTS:
      return {
        ...state,
        elementOne: cleanNumber(state.displayValue),
        formula: action.payload.value,
        initNewValue: true,
      };

    case CalculatorTypes.CLEAR:
      return {
        ...state,
        displayValue: "0",
        initNewValue: false,
        elementOne: "",
        formula: "",
      };

    case CalculatorTypes.CLEAR_ENTRY:
      return {
        ...state,
        displayValue: "0",
      };

    case CalculatorTypes.BACK_SPACE:
      var newValue = (state.displayValue.length > 0) ? state.displayValue.slice(0, -1) : "";
      return {
        ...state,
        displayValue: newValue !== "" ? newValue : "0",
      };

    case CalculatorTypes.PLUS_MINUS:
      return {
        ...state,
        displayValue:
          state.displayValue < 0
            ? Math.abs(state.displayValue)
            : "-" + state.displayValue,
      };

    case CalculatorTypes.PERCENT:
      return {
        ...state,
        displayValue: cleanNumber(state.displayValue / 100),
      };

    case CalculatorTypes.RECIPROCAL:
      return {
        ...state,
        displayValue: cleanNumber(1 / state.displayValue),
      };

    case CalculatorTypes.SQUARE:
      return {
        ...state,
        displayValue: cleanNumber(Math.pow(state.displayValue, 2)),
      };

    case CalculatorTypes.SQUAREROOT:
      return {
        ...state,
        displayValue: cleanNumber(Math.sqrt(state.displayValue)),
      };

    case CalculatorTypes.EQUALS_TO:
      return {
        ...state,
        displayValue: calculateEqualsTo(state),
        elementOne: "",
        formula: "",
      };

    default:
      return state;
  }
};

export default reducer;
