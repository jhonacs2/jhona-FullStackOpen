import React from 'react'

const Numbers = ({ person }) => {
    // console.log(person)
    return(
        <>
        <p>{person.name} {person.number}</p>
        </>
        
    )
}

export default Numbers