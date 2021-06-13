import React, {useState} from "react";
import Numbers from "./components/Numbers"
const App = () => {
  const [persons , setPersons ] = useState([
    {name:'Jhonatan Soto'}
  ])
  const [newName, setnewName] = useState('')

  const handleNameChange = (e) => {
    setnewName(e.target.value)
  }

  const addNumber = (e) => {
    e.preventDefault()
    const newContact = {
      name: newName
    }
    const sameName = persons.map (person => person.name)
    const conditionalName = sameName.includes(newName)
    
    if(conditionalName){
      return alert(`el nombre ${newName} ya existe`)
    }

    setPersons(persons.concat(newContact))
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( (person, index) => {
        return <Numbers key = {index} person = {person}/>
      })}
      
    </div>
  )
}

export default App;
