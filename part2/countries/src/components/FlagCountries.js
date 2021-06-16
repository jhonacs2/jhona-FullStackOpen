import React from 'react'

export default function FlagCountries({filterCountries}) {
    const {0:languages} = filterCountries.map(languageCountry => languageCountry.languages)
    console.log(languages)
    // console.log(languages)
    return (
        <div>
            <img src = {filterCountries[0].flag} width = "50px" alt = {filterCountries[0].name}/>
            <p>{filterCountries[0].name}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map((language,index) => <li key={index}>{language.name}</li>)}
            </ul>
        </div>
    )
}
