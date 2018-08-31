import React, { Component } from 'react';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import Chart from '../components/Chart';
import GoogleMap from '../components/Map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    // This (below) is destructuring. Pulling these two properties off of the 'coord' property
    // The two properties in the brackets have to be identical to the properties in
    // cityData.city.coord
    // Same as const lon = cityData.city.coord.lon (same for lat)
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap
          lon={lon}
          lat={lat}
          containerElement={<div style={{height: '100%'}}/> }
          mapElement={<div style={{height: '100%'}}/>}
          onMapLoad={() => {}}
          onMapClick={() => {}}
        /></td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={pressure} color="green" units="hPa" /></td>
        <td><Chart data={humidity} color="black" units="%" /></td>
      </tr>
    );
  }

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

function mapStateToProps({ weather }) {
  return {
    weather
  };
}
// The above is a bit of ES6 syntact sugar. Same as:
//  function mapStateToProps(state) {
//    return { weather: state.weather }
//  }

export default connect(mapStateToProps)(WeatherList);