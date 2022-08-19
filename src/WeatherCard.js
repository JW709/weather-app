import React from 'react';
import { Typography} from '@mui/material'
import moment from 'moment-timezone';


const WeatherCard = ({ data }) => {
   
    return (
        <>
            <div className="wrapper">
                <div className="weather-wrapper">
                    <div className="box today">
                        <Typography>Today</Typography>
                            <div className="flex-container">

                                <div className="flex-child left"> 
                                    <img id="wicon" src={data.current.condition.icon} alt="Weather icon" />
                                </div>
                                        
                                <div className="flex-child right">
                                    {data.current.temp_c}&#8451;
                                </div>
                            </div>

                            <div className="condition-text">{data.current.condition.text}</div>
                    </div>

                    {data.forecast.forecastday.map((day, index) => {
                        return (
                            <>
                           
                                <div className="flex-container box forecast" key={index}>
                                    <div>
                                        {moment(day.date).format("ddd")}
                                    </div>

                                    <img className="condition-text" key={index} id="wicon" src={day.day.condition.icon}
                                        alt="Weather icon" />
                                        {Math.floor(day.day.maxtemp_c)}&#8451;

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