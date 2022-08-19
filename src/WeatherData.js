import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const WeatherData = () => {
  const [weather, setWeather] = useState([]);
  const [locations] = useState([
    {name: 'toronto'},
    {name: 'london'},
    {name: 'vancouver'},
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    setIsLoading(true)
    let data = [];
    let promises = [];

    for (let city of locations) {
      promises.push(
        await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9da076a1d46c4a6ba21205320221708&q=${city.name}&days=4&aqi=no`).then(response => {
          data.push(response);
        })
      )
    }
    Promise.all(promises).then(() => setWeather(data));
    setIsLoading(false);
  }


  useEffect(() => {
    getWeather();
  }, [])
   
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="weather-wrapper">
      <div className="tabs">
        {weather?.map((city, index) => {
          return (
            < >
              <input type="radio" name="tabs" id={`tab${index}`} checked="checked" />
              <label for={`tab${index}`}>{city?.data?.location?.name.toUpperCase()}</label>
              <div className="tab">
                <WeatherCard
                      data={city.data}
                    />
              </div>
            </>
          )
        })}
      </div>
   </div>

  );
}

export default WeatherData;