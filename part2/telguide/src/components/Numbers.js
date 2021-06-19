import React from 'react'

const Numbers = ({ person, deletePerson }) => {
    
    return(
        <>
        <p>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></p>
        
        </>
        
    )
}

export default Numbers