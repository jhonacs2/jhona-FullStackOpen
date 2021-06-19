import React from "react";
import contactService from "../services/contacts";

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
      const changueTF = window.confirm(
        `User is already added to phonebook, do you want replace it`
      );
      if (changueTF) {
        const [contact] = persons.filter((person) => person.name === newName);
        const changueContact = { ...contact, number: parseInt(number) };
        contactService
          .updateContact(contact.id, changueContact)
          .then((returnContact) => {
            setPersons(
              persons.map((person) =>
                person.id === contact.id ? returnContact : person
              )
            );
          });
      }
    } else {
      contactService.create(newContact).then((contact) => {
        setPersons(persons.concat(contact));
        setnewName("");
        setNumber(0);
      });
    }
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
