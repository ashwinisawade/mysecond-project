import React, { useState, useEffect } from "react";

function SessionStorage() {
  const [value, setValue] = useState('');

  useEffect(() => {
    
    const storedValue = sessionStorage.getItem('data');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleClick = () => {
    
    sessionStorage.setItem('data', 'demo value');
    setValue('demo value');
  };

  const handleRemove = () => {
    sessionStorage.removeItem('data');
    setValue('');
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleClick}>Set Value</button>
      <button onClick={handleRemove}>Remove Value</button>
    </div>
  );
}

export default SessionStorage;

