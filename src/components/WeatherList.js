import React, { Component } from 'react';
import _map from 'lodash/map';
import Chart from './Chart';
import GoogleMap from './Map';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = _map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap
            lon={lon}
            lat={lat}
            containerElement={<div style={{height: '100%'}}/> }
            mapElement={<div style={{height: '100%'}}/>}
            onMapLoad={() => {}}
            onMapClick={() => {}}
          />
        </td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={pressure} color="green" units="hPa" /></td>
        <td><Chart data={humidity} color="black" units="%" /></td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

export default WeatherList;
