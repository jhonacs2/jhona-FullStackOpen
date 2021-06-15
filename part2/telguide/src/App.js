import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setnewName] = useState("");
  const [number, setNumber] = useState(0);
  const [filterName, setFilterName] = useState("")
  const filterToShow = (filterName === "") 
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  

  return (
    <div>
      <h2>Phonebook</h2>
      <br />
      <Filter filterName ={filterName} setFilterName = {setFilterName}/>
      {/* Filter Shown with: <input value={filterName}  onChange = {filterInput} /> */}
      
      <h3>Add a new</h3>
      <PersonForm 
        setnewName={setnewName} 
        newName={newName} 
        number={number}
        setNumber = {setNumber}
        setPersons = {setPersons}
        persons = {persons}
        />
      <h2>Numbers</h2>
      <Persons persons={filterToShow}/>
      
    </div>
  );
};

export default App;
