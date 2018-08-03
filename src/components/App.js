import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import axios from "axios";

const API_KEY = '5caab54f4305a216d19277b929799c84';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default class App extends Component {
  state = {
    data: []
  };

  fetchWeather = async (city) => {
    const currentData = this.state.data;

    const response = await axios.get(`${ROOT_URL}&q=${city},us`);
    this.setState({ data: [response.data, ...currentData] });
  };

  render() {
    return (
      <div className="container">
      	<SearchBar
          weather={this.state.data}
          fetchWeather={this.fetchWeather} />

        <WeatherList weather={this.state.data} />
      </div>
    );
  }
}
