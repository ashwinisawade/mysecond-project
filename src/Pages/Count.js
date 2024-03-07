import React, { useState } from 'react';

const Otp = () => {
  const [count, setCount] = useState(0); // Initialize count to 0

  const generateOTP = () => {
    const countFactor = count + 1; // Increment count before generating OTP
    const newOTP = Math.floor(1000 + countFactor * Math.random() * 9000); // Generate OTP based on count
    alert("Generated OTP: " + newOTP); // Concatenate strings for alert message
    setCount(prevCount => prevCount + 1); // Increment count after generating OTP
  };

  return (
    <div>
      <h1>OTP Generation</h1>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
};

export default Otp;