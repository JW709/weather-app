import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Tabs, Tab, Typography} from '@mui/material'
import WeatherData from './WeatherData';

function App() {
  
  return (
    <div className="weather-app">
      <WeatherData />
      
    </div>
  );
}

export default App;
