import React from "react";

const PersonForm = ({
  setnewName,
  newName,
  number,
  setNumber,
  setPersons,
  persons,
}) => {
  const handleNameChange = (e) => {
    setnewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const addNumber = (e) => {
    e.preventDefault();
    const newContact = {
      name: newName,
      number: number,
    };

    const sameName = persons.map((person) => person.name);
    const conditionalName = sameName.includes(newName);

    if (conditionalName) {
      return alert(`el nombre ${newName} ya existe`);
    }
    
    setPersons(persons.concat(newContact));
    setnewName("");
    setNumber(0);
  };
  return (
    <form onSubmit={addNumber}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
        <br />
        Number:{" "}
        <input value={number} onChange={handleNumberChange} type="number" />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
