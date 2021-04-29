import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
       setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

    if(loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
           <WeatherForecastDay data={forecast[1]}/>
                </div>
                <div className="col">
           <WeatherForecastDay data={forecast[2]}/>
                </div>
                <div className="col">
           <WeatherForecastDay data={forecast[3]}/>
                </div>
                <div className="col">
           <WeatherForecastDay data={forecast[4]}/>
                </div>
                <div className="col">
           <WeatherForecastDay data={forecast[5]}/>
                </div>
            </div>
        </div>
        );
    }
    else {
    let apiKey = `9fdfde34a67a648a41ee1aa53553e730`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURl).then(handleResponse);
    return null;
    }
}