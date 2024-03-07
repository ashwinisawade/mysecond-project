import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);

  const login = () => {
    sessionStorage.setItem("login", 1234);
    navigate("/");
  };
  // const login = () => {
  //   sessionStorage.setItem("login", 1234);
  //   navigate("RegistrationForm");
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Login</h2>

      <input type="text" /><br />
      <input type="text" /><br />
      <button onClick={login}>Login</button>
      <button style={{ padding: '10px 20px', position: 'absolute', right: '40px' }} disabled>Time: {timer}</button>
    </div>
  );
}

export default Login;
