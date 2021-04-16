import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";

function Weather() {
  return (
    <div>
      <h1> Weather App</h1>
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);