import React, { useState ,useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import spinner from '../../assets/gif/loading-spinner.gif'; 

import WeatherData from '../../util/interfaces/WeatherData';
import CurrentWeatherData from '../../util/interfaces/CurrentWeatherData';

import './weather.scss';
import formatData from '../../util/functions/formatData';

const Weather = () => {
  const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=44.77&longitude=20.41&hourly=temperature_2m,relativehumidity_2m,apparent_temperature';

  const [weatherData, setWeatherData] = useState({} as CurrentWeatherData);
  const [intervalValue, setIntervalValue] = useState(600000);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(apiURL)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data: WeatherData) => {
        setWeatherData(formatData(data));
        setIsLoaded(true);
      })
      .catch(err => {
        console.error(`Error while fetching weather data: ${err}`);
      });
  }, [])

  useEffect(() => {
    const inverval = setInterval(() => {
      setIsLoaded(false);
      fetch(apiURL)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data: WeatherData) => {
        setWeatherData(formatData(data));
        setIsLoaded(true);
      })
      .catch(err => {
        console.error(`Error while fetching weather data: ${err}`);
      });
    }, intervalValue);
    return () => clearInterval(inverval);
  });

  const refreshWeatherData = () => {
    setIsLoaded(false);
    fetch(apiURL)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data: WeatherData) => {
        setWeatherData(formatData(data));
        setIsLoaded(true);
      })
      .catch(err => {
        console.error(`Error while fetching weather data: ${err}`);
      });
  };

  const setRefreshInterval = (e: any) => {
    setIntervalValue(+e.target.value * 1000);
  };

  return(
    <div className="weather">
      <Header />
      {isLoaded && 
      <div className='report-dashboard'>
        <div className="weather-report">
          <h1>Belgrade</h1>
          <p>Temperature: {weatherData.temperature_2m} {weatherData.temperature_2m_symb}</p>
          <p>Apparent Temperature: {weatherData.apparent_temperature} {weatherData.apparent_temperature_symb}</p>
          <p>Relative humidity: {weatherData.relativehumidity_2m} {weatherData.relativehumidity_2m_symb}</p>
        </div>
        <div className="options">
          <button onClick={refreshWeatherData}>Refrest Report</button>
          <select name="refresh-interval" onChange={(e: any) => { setRefreshInterval(e) }}>
            <option value="600">10 min</option>
            <option value="1800">30 min</option>
            <option value="3600">1 h</option>
          </select>
        </div>
      </div>
      }
      {!isLoaded && 
        <img src={spinner} />
      }
      <Footer />
    </div>
  );
}

export default Weather;