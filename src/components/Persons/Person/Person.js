import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p> I'm a Person!</p>
      <p>
        Name provided as attribute: {props.name}, age: {props.age}{' '}
      </p>
      <p>Age {Math.floor(Math.random() * 100)}</p>
      <p> {props.children} </p>
      <button onClick={props.deleteButton}>Delete</button>
      <br />
      <input type='text' onChange={props.change} />
    </div>
  );
};

export default person;
