import React from 'react'

const Numbers = ({ person, deletePerson }) => {
    
    return(
        <>
        <p>{person.name} {person.number} </p>
        <button onClick={deletePerson}>Delete</button>
        </>
        
    )
}

export default Numbers