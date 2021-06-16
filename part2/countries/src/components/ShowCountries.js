import React from 'react'

export default function ShowCountries({filterCountries}) {
   console.log(filterCountries)
    return (
        <div>
            {filterCountries.map(country => <p key={country.population}>{country.name}</p> )}
        </div>
    )
}
