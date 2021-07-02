import React from "react";
import contactService from "../services/contacts";

const PersonForm = ({
  setnewName,
  newName,
  number,
  setNumber,
  setPersons,
  persons,
  setNotification,
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
      number: number.toString(),
    };
    const sameName = persons.map((person) => person.name);
    const conditionalName = sameName.includes(newName);
    const [contact] = persons.filter((person) => person.name === newName);
    if (conditionalName) {
      const changueTF = window.confirm(
        `User is already added to phonebook, do you want replace it`
      );
      if (changueTF) {
        const changueContact = { ...contact, number: number};
        contactService
          .updateContact(contact.id, changueContact)
          .then((returnContact) => {
            setPersons(
              persons.map((person) =>
                person.id === contact.id ? returnContact : person
              )
            );
          })
          .catch(error => {
            const alert = error.response.data
        setNotification(`${alert.error}`);
          });
      }
    } else {
      contactService
      .create(newContact)
      .then((contact) => {
        setPersons(persons.concat(contact));
        setnewName("");
        setNumber(0);
        setNotification(`${newContact.name} was added to phonebook`);
      })
      .catch(error => {
        const alert = error.response.data
        setNotification(`${alert.error}`);
      })
      ;
      

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }
  };
  return (
    <form onSubmit={addNumber}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
        <br />
        Number:{" "}
        <input value={number} onChange={handleNumberChange} type="text" />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
