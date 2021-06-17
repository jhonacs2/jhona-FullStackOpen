import React, { useState, useEffect } from "react";
import FlagCountries from "./FlagCountries";
import ShowCountries from "./ShowCountries";
import axios from "axios";
export default function Countries({ setCountries, countries }) {
  const [filterCountry, setFilterCountry] = useState("");
  const [weather, setWeather] = useState(null);

  const filterInput = (e) => {
    setFilterCountry(e.target.value);
  };

  const filterCountries = countries.filter((countrie) =>
    countrie.name.toLowerCase().includes(filterCountry.toLowerCase())
  );

  useEffect(() => {
    if (filterCountries.length === 1) {
      const key = process.env.REACT_APP_API_KEY;

      const name = filterCountries.map((country) => country.capital);
      

      if (name[0]) {
        axios
          .get(
            `http://api.weatherstack.com/current?access_key=${key}&query=${name[0]}`
          )
          .then((response) => {
            setWeather(response.data);
          });
      }
    }
  }, [filterCountry]);

  return (
    <div>
      {filterCountry} <br />
      Find Countries <input value={filterCountry} onChange={filterInput} />
      {filterCountries.length > 1 && filterCountries.length <= 10 ? (
        <ShowCountries filterCountries={filterCountries} />
      ) : filterCountries.length === 1 && weather ? (
        <FlagCountries filterCountries={filterCountries} weather={weather} />
      ) : (
        <p>F</p>
      )}
    </div>
  );
}
