import React, {useState} from 'react'
import FlagCountries from './FlagCountries'
import ShowCountries from './ShowCountries'

export default function Countries({setCountries, countries}) {
    const [filterCountry, setFilterCountry,] = useState("")
  

    const filterInput = (e) => {
        setFilterCountry(e.target.value)
    }

    // const filterCountries = (countries.length <= 10) 
    // ? countries.filter(countrie => countrie.name.toLowerCase().includes("Bolivia".toLowerCase()))
    // : <p>Too Many Matches, specify another filter</p>

    const filterCountries = countries.filter(countrie => countrie.name.toLowerCase().includes(filterCountry.toLowerCase()))
    
    // const showCountries = (filterCountries.length <= 10)
    // ? <ShowCountries filterCountries = {filterCountries} />
    // :<p>Too Many Countries</p>

    
    
    
    return (
        <div>
            {filterCountry} <br />
            Find Countries <input value = {filterCountry} onChange={filterInput} />
            
            {(filterCountries.length === 1)
            ?<FlagCountries filterCountries = {filterCountries} />
            :(filterCountries.length <= 10)
            ?<ShowCountries filterCountries = {filterCountries} />
            :<p>Too many countries</p>
            }
        </div>
    )
}
