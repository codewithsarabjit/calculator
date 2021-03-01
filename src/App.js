import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import CalculatorPage from "./pages/calculatorpage/calculatorpage.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/calculator">
            <Homepage />
          </Route>
          <Route path="/calculator/start">
            <CalculatorPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
