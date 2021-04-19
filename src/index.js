import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Weather from "./Weather";

function WeatherApp() {
  return (
    <div>
      <Weather defaultCity="Berlin"/>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);