import React, { Component } from 'react';
import SearchBar from '../../../../../Desktop/src/containers/search_bar';
import WeatherList from '../../../../../Desktop/src/containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <WeatherList />
      </div>
    );
  }
}
