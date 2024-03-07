import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentC() {
  const { Dispatch } = useContext(CountContext);

  return (
    <div>
      ComponentC - {CountContext.CountState}
      <button onClick={() => Dispatch('increment')}>Increment</button>
      <br /><br />
      <button onClick={() => Dispatch('decrement')}>Decrement</button>
      <br /><br />
      <button onClick={() => Dispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentC;
