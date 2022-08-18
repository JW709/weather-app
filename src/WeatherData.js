import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const WeatherData = () => {
  const [value, setValue] = useState(0)
  const [weather, setWeather] = useState([]);
  const [locations, setLocations] = useState([
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
        await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9da076a1d46c4a6ba21205320221708&q=${city.name}&days=4&aqi=no`).then(response => {
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

      <div class="tabs">
        
        <input type="radio" name="tabs" id="tabone" checked="checked" />
        <label for="tabone">Toronto</label>
        
        <div class="tab">
          <WeatherCard
                location={"Toronto"}
                data={weather[0]}
              />
        </div>
        
        <input type="radio" name="tabs" id="tabtwo" checked="checked" />
        <label for="tabtwo">London</label>
        <div class="tab">
          <WeatherCard 
                  location={"London"}
                  data={weather[1]}
                  />
        </div>
        
        <input type="radio" name="tabs" id="tabthree" checked="checked" />
        <label for="tabthree">Vancouver</label>
        <div class="tab">
          <WeatherCard 
                  location={"Vancouver"}
                  data={weather[2]}
                  />
        </div>

      </div>
          
          
     

   </div>
      
      
  
  );




}

export default WeatherData;