import React, { useContext } from 'react';
import { CountContext } from '../App';
import ComponentC from './ComponentC';

function ComponentB() {
 

  return (
    <div>
      <ComponentC/> 
    </div>
  );
}

export default ComponentB;