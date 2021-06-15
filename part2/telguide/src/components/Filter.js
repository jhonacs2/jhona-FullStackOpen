import React,{useState} from 'react'

const Filter = ({ persons, setPersons }) => {
    const [filtePerson, setFilter] = useState("")
    const filterInput = (e) => {
        setFilter(e.target.value)
        
        
        const result = persons.filter( person => {
            
           return person.name.includes(filtePerson)
        })
       
        return setPersons(result)
    }
    return(
        <>
        {filtePerson}
        <br />
        Filter Shown with: <input value ={filtePerson}   onChange = {filterInput}/>
        {/* onChange={handleNameChange} */}
        </>
        
    )
}

export default Filter