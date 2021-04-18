import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Search from "./Search";
import Weather from "./Weather";

function WeatherApp() {
  return (
    <div>
      <Weather />
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);