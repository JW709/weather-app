import './App.css';
import React, { useState, useEffect } from 'react';
import { Box, Card, Grid, Paper, TextField, Tabs, Tab, Typography} from '@mui/material'
import moment from 'moment-timezone';


const WeatherCard = ({ data }) => {

    console.log(data)
 
    return (
        <>
            <div className="wrapper">
                <div className="weather-wrapper">
                    <div className="box today">
                        <Typography>Today</Typography>
                            <div className="flex-container">

                                <div className="flex-child left"> 
                                    <img id="wicon" src={data.data.current.condition.icon} alt="Weather icon" />
                                </div>
                                        
                                <div className="flex-child right">
                                    {data.data.current.temp_c}
                                </div>
                            </div>

                            <div>{data.data.current.condition.text}</div>
                    </div>

                    {data.data.forecast.forecastday.map((day, index) => {
                        return (
                            <>
                           
                            <div className="flex-container box" key={index}>
                            <div>
                            {moment(day.date).format("ddd")}
                            </div>
                                <img key={index} id="wicon" src={day.day.condition.icon}
                                alt="Weather icon" />

                                {Math.floor(day.day.maxtemp_c)}
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WeatherCard;