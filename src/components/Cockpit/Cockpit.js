import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = [classes.Button];

  if (props.buttonState) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2)
    assignedClasses = [classes.red, classes.bold].join(' ');

  return (
    <div>
      <p className={assignedClasses}>Delete Elements tp chnge Css styling</p>
      <button className={btnClass.join(' ')} onClick={props.button}>
        Show/Hide Persons
      </button>
    </div>
  );
};

export default cockpit;
