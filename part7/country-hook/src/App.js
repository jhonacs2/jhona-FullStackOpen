import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  // console.log(name);
  useEffect(() => {
    const obteindata = async () => {
      try {
        if (name) {
          const nameCountry = await axios.get(
            `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
          );
          console.log(nameCountry.status);
          const data = nameCountry.data[0];
          const found = true;
          setCountry({ data, found });
        }
      } catch (error) {
        const data = null;
        const found = false;
        setCountry({ data, found });
      }
    };

    obteindata();
  }, [name]);
  // console.log(country);
  return country;
};

const Country = ({ country }) => {
  console.log('el pais es ', country);
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.data.name} </h3>
      <div>capital {country.data.capital} </div>
      <div>population {country.data.population}</div>
      <img
        src={country.data.flag}
        height='100'
        alt={`flag of ${country.name}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField('text');
  const [name, setName] = useState('');
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
