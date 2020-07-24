import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        change={(event) => props.change(event, person.id)}
        name={person.name}
        age={person.age}
        deleteButton={() => props.deleteButton(index)}
      />
    );
  });

export default persons;
