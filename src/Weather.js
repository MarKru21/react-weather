import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
      function handleResponse(response) {
    console.log(response.data); 
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        city: response.data.name,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
    });
}
function search() {
 const apiKey = `9fdfde34a67a648a41ee1aa53553e730`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search(city);
}

function handleCityChange(event) {
setCity(event.target.value);
}

if(weatherData.ready) {
    return(
  <div className="Weather">
             <form onSubmit={handleSubmit}>
                 <div className="row">
                     <div className="col-6">
      <input type="search" placeholder="Enter a city..." className="Search" autoFocus="on" onChange={handleCityChange}/>
      </div>
      <div className="col-6">
      <input type="submit" value="Search" className="btn btn-primary btn-sm"/>
      {" "}
      <button className="btn btn-success btn-sm">Current</button>
                 </div>
                 </div>
    </form>
    <Weatherinfo data={weatherData}/>
             </div>
    );
} else {
    search();
    return "Loading ..."
}
}