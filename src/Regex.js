import React, { useEffect, useRef, useState } from 'react';

function RegexExample() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const nameInpute = useRef(null);
  useEffect(() => {
    // This useEffect hook runs once on component mount
    // and focuses the input element
    nameInpute.current.focus();
    
  }, []);
  const handleNameChange = (event) => {
    const name = event.target.value;
    setNameValue(name);

    // Regular expression for validating name format (alphabets and spaces only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    setIsNameValid(nameRegex.test(name));
  };
console.log("name",isNameValid);
  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmailValue(email);

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameValid && isEmailValid) {
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify({ name: nameValue, email: emailValue }));
      console.log('Form data saved to localStorage:', { name: nameValue, email: emailValue });

      // Display alert message
      alert('Form submitted successfully!');
    } else {
      alert('Please correct the form errors before submitting.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input
            type="text"
            value={nameValue}
            onChange={handleNameChange}
            style={{ borderColor: isNameValid ? 'initial' : 'red' }}
          /><br />
        </label>
        {!isNameValid && <p style={{ color: 'red' }}>Please enter a valid name</p>}<br />

        <label>
          Enter Email:
          <input
            type="text"
            value={emailValue}
            ref={nameInpute}
            onChange={handleEmailChange}
            style={{ borderColor: isEmailValid ? 'initial' : 'red' }}
          />
        </label>
        {!isEmailValid && <p style={{ color: 'red' }}>Please enter a valid email</p>}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegexExample;

