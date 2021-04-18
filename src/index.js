import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";

function Weather() {
  return (
    <div>
      <h1> Weather App</h1>
      <Search />
      <footer>
        This project was coded by Marlen Krügener and is{" "}
            <a href="https://github.com/MarKru21">open sourced on Github</a>
        </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);