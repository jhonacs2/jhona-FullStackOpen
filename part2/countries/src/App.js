import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from './components/Countries'
function App() {
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(resolve => {
      setCountries(resolve.data)
    })
  },[]);
  return (
    <div>
      <h1>Countries</h1>
      <Countries setCountries = {countries} countries = {countries}/>
    </div>
  );
}

export default App;
