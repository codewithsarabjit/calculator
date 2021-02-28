import { combineReducers } from "redux";

import calculatorReducer from "./Calculator/calculator.reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export default rootReducer;
