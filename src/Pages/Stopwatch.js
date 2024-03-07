import React, { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    setIsPaused(false); // Ensure timer resumes when restarted
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsPaused(false);
  };
  const handleDecrement = () => {
    if (time > 0) {
      setTime(prev => prev - 1);
    }
  };

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;


