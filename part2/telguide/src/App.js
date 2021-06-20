import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setnewName] = useState("");
  const [number, setNumber] = useState(0);
  const [filterName, setFilterName] = useState("");
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    contactService
      .getAllContacts()
      .then((allContacts) => setPersons(allContacts));
  }, []);

 
  const filterToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterName.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <br />
      <Filter filterName={filterName} setFilterName={setFilterName} />
      {/* Filter Shown with: <input value={filterName}  onChange = {filterInput} /> */}
      <Notification notification = {notification} />
      <h3>Add a new</h3>
      <PersonForm
        setnewName={setnewName}
        newName={newName}
        number={number}
        setNumber={setNumber}
        setPersons={setPersons}
        persons={persons}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <Persons persons={filterToShow} setPersons={setPersons} setNotification={setNotification}/>
    </div>
  );
};

export default App;
