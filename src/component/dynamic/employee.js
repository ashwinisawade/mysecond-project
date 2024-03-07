import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Employee from 'Employee';

function Dynamic() {
  let employees = [
    { id: 1, name: "Ashwini", email: "ashwini@gmail.com" },
    { id: 2, name: "Pooja", email: "pooja@gmail.com" },
    { id: 3, name: "Shraddha", email: "shradhamhangore@gmail.com" },
  ];

  return (
    <div className='dyn'>
      <Router>
        <h1>Dynamic Routing</h1>
        <Routes>
          {employees.map((content) => (
            <Route
              key={content.id}
              path={"/employee/"+content.id+"/"+content.name}
              element={<Employee data={content} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default Dynamic;