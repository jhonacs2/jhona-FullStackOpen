import React from "react";

export default function Weather({weather}) {
 
  return (
    
    <div>{ (weather ) 
    ?<>
    <h1>Weather in {weather.location.country}</h1>
     <p><strong>temperature</strong> {weather.current.temperature}°</p>
     <img src ={weather.current.weather_icons} alt={weather.location.country}></img>
     <p><strong>Wind Speed</strong> {weather.current.wind_speed}</p>
   </>
    :<p>fa</p>
    }
     
    </div>
  )
}
