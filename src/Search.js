import "./search.css";
import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default function Search(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      place: response.data.name,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `9fdfde34a67a648a41ee1aa53553e730`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
      <button className="btn btn-success btn-sm">Current</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h3>{weather.place}</h3>
        <ul>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
          <li>{weather.description}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

