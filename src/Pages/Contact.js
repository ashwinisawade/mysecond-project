 import React, { useEffect, useState } from "react";
 import { useLocation } from 'react-router-dom';

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [selectedItem, setSelectedItem] = useState(""); // New state for tracking selected item
  
    const handleSave = () => {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", pswd);
    };
  
    const handleDelete = () => {
      // Check if a specific item is selected and remove it
      if (selectedItem) {
        sessionStorage.removeItem(selectedItem);
        // Clear the selected item after deletion
        setSelectedItem("");
      }
    };
    
      const location=useLocation() 
    
      console.log(location.pathname,"pathname"); // current pathname
      console.log(location.search,"search");   // current query parameters
      console.log(location.state,"state");    // current state (if any)

      
      
      
      
     return (
      <div className="form">
        <input
          type="name"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
  
        <input
          type="email"
          placeholder="Email or Phone number"
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPswd(e.target.value)}
        />
  
        <button onClick={handleSave}>Save</button>
  
        <div>
          <div>{localStorage.getItem("name")}</div>
          <div>{localStorage.getItem("email")}</div>
          <div>{localStorage.getItem("password")}</div>
        </div>
  
        <button onClick={() => setSelectedItem("name")}>Select Name</button>
        <button onClick={() => setSelectedItem("email")}>Select Email</button>
        <button onClick={() => setSelectedItem("password")}>Select Password</button>
  
        <button onClick={handleDelete}>Delete Selected</button>
        {/* <div>
          <h1>Hello{location.pathname.replace("/",'')}page</h1>
          {location.pathname ='/about/thapa'?<p>Hi,thapa</p>}:<p>Login to see your file</p>

        </div> */}
        
       </div>
    );
  }
  
  export default App;
  