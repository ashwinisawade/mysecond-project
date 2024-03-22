import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const JwtExample = () => {
  const [token, setTokenState] = useState(null);
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState("");
  const [decodedMessage, setDecodedMessage] = useState("");

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setTokenState(storedToken);
      const decodedToken = decodeToken(storedToken);
      if (decodedToken && decodedToken.username) {
        setUsername(decodedToken.username);
        setDecodedMessage(decodedToken.message); // Set decoded message if available
      }
    }
  }, []);

  const handleLogin = () => {
    const sampleUsername = "john_doe"; // Change this to the desired username
    const sampleMessage = message; // Get the message from input
    const sampleToken = generateToken(sampleUsername, sampleMessage);
    setToken(sampleToken);
    setTokenState(sampleToken);
    const decodedToken = decodeToken(sampleToken);
    if (decodedToken && decodedToken.username) {
      setUsername(decodedToken.username);
      setDecodedMessage(decodedToken.message); // Set decoded message if available
    }
  };

  const generateToken = (username, message) => {
    // For this example, we're just using a simple base64 encoding
    const token = btoa(JSON.stringify({ username, message }));
    return token;
  };

  const handleLogout = () => {
    removeToken();
    setTokenState(null);
    setUsername(null);
    setMessage("");
    setDecodedMessage("");
  };

  const decodeToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const setToken = (token) => {
    // For this example, we're storing the token in localStorage
    localStorage.setItem("token", token);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      {token ? (
        <div>
          <p>Logged in as: {username}</p>
          <p>Decoded Message: {decodedMessage}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default JwtExample;
