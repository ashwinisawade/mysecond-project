import React, { useState, useEffect } from 'react';

const Otp = () => {
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState(60); // Timer starts from 60 seconds
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isTimerActive) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive]);

  const generateOTP = () => {
    const newOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
    setOTP(newOTP);
    setIsTimerActive(true);
    setTimer(60); // Reset timer to 60 seconds
  };

  const resetTimer = () => {
    setIsTimerActive(false);
    setTimer(60); // Reset timer to 60 seconds
  };

  return (
    <div>
      <h1>OTP Generator</h1>
      {otp && (
        <div>
          <h2>OTP: {otp}</h2>
          <p>Time remaining: {timer} seconds</p>
        </div>
      )}
      <button onClick={generateOTP} disabled={isTimerActive}>
        Generate OTP
      </button>
      {isTimerActive && (
        <button onClick={resetTimer}>
          Reset Timer
        </button>
      )}
    </div>
  );
};

export default Otp;
