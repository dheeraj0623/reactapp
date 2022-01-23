
import React from 'react';
import './Person.css';

const Person = ( props ) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
        </div>
    )
};

export default Person;