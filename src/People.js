
 
import React from 'react';

const PeopleComponent = () => {
  const People = [
    { name: 'Ashwini', age: '28', gender: 'Female' },
    { name: 'Shradhaa', age: '22', gender: 'Female' },
    { name: 'Nilesh', age: '32', gender: 'Male' },
    { name: 'Vicky', age: '30', gender: 'Male' },
    { name: 'Anav', age: '18', gender: 'Male' },
    { name: 'Pooja', age: '28', gender: 'Female' }
  ];

  const groupPeople = People.reduce((accumulator, currentValue) => {
    const key = currentValue.gender;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {});

  return (
    <div>
      {Object.keys(groupPeople).map((key, index) => (
        <div key={index}>
          <h2>{key}</h2>
          <ul>
            {groupPeople[key].map((person, i) => (
              <li key={i}>
                {person.name}, {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PeopleComponent;
