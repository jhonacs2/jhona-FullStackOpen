import React from 'react'
import ButtonCountries from './ButtonCountries'

export default function ShowCountries({filterCountries}) {
//    console.log(filterCountries)
    return (
        <div>
            {filterCountries.map(country => <div key={country.population}><p>{country.name}</p><ButtonCountries country = {country}/></div> )} 
        </div>
    )
}
