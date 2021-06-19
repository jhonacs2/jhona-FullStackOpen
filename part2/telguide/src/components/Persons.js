import React from "react";
import Numbers from "./Numbers";
import contactService from "../services/contacts";
const Person = ({ persons, setPersons }) => {

  const deletePerson = (id) => {
    const { name } = persons.find((n) => n.id === id);
    const result = window.confirm(`delete ${name}`);
    if (result) {
      contactService.deleteContact(id);
      setPersons(persons.filter((person) => person.id !== id && person ));
    }
  };

  return (
    <>
      {persons.map((person, index) => {
        return (
          <Numbers
            key={index}
            person={person}
            deletePerson={() => deletePerson(person.id)}
          />
        );
      })}
    </>
  );
};

export default Person;
