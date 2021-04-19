import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
      function handleResponse(response) {
    console.log(response.data); 
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        iconURL: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
        description: response.data.weather[0].description,
        date: "Wednesday, 7:00",
    });
}

if(weatherData.ready) {
    return(
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
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconURL} alt={weatherData.description} className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                </div>
                </div>
                </div>
                  <div className="col-6">
                      <ul>
                          <li>
                              Humidity: {weatherData.humidity}%
                          </li>
                          <li>
                              Wind: {weatherData.wind} km/h
                          </li>
                      </ul>
                  </div>
            </div>
             </div>
    );
} else {
     const apiKey = `9fdfde34a67a648a41ee1aa53553e730`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading ..."
}
}
  