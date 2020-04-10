import React, { useState } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    // Declaratively set the state of the input field
    // (we tell the field what the state is, not the other way around)
    setTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    // For form elements, use preventDefault() to override
    // default browser actions (in this case, would attempt a refresh the page)
    event.preventDefault();
    // We need to go and fetch weather data, call callback passed from parent
    await fetchWeather(term);

    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        placeholder="Get a five day forecast in your favorite U.S. city"
        className="form-control"
        value={term}
        onChange={handleChange}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </span>
    </form>
  );
};

export default SearchBar;
