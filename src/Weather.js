import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div>
        <div className="Weather">
             <form>
                 <div className="row">
                     <div className="col-6">
      <input type="search" placeholder="Enter a city..." className="Search" autoFocus="on"/>
      </div>
      <div className="col-6">
      <input type="submit" value="Search" className="btn btn-primary btn-sm"/>
      {" "}
      <button className="btn btn-success btn-sm">Current</button>
                 </div>
                 </div>
    </form>
            <h1>New York</h1>
            <ul>
                <li>
                    Wednesday 7:00
                </li>
                <li>
                    Mostly cloudy
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">6</span><span className="unit">°C</span>
                </div>
                </div>
                </div>
                  <div className="col-6">
                      <ul>
                          <li>
                              Precipitation: 15%
                          </li>
                          <li>
                              Humidity: 72%
                          </li>
                          <li>
                              Wind: 13km/h
                          </li>
                      </ul>
                  </div>
            </div>
             </div>
             <footer>
        This project was coded by Marlen Krügener and is{" "}
            <a href="https://github.com/MarKru21">open sourced on Github</a>
        </footer>
        </div>

    )
}