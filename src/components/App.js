import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

const App = () => {
  const [data, setData] = useState([]);

  const fetchWeather = async (city) => {
    const response = await axios.get(`${ROOT_URL}&q=${city},us`);
    setData((state) => [response.data, ...state]);
  };

  return (
    <div className="container">
      <SearchBar fetchWeather={fetchWeather} />
      <WeatherList weather={data} />
    </div>
  );
};

export default App;
