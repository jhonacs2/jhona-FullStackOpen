import React from 'react'
import Numbers from './Numbers'

const Person = ({ persons }) => {
    
    return(
        <>
        {persons.map((person, index) => {
        return <Numbers key={index} person={person} />;
      })}
        </>
        
    )
}

export default Person