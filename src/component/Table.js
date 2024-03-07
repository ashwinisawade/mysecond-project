import React from "react";


const data = [
  { name: "poonam", age: 22 },
  { name: "shradha", age: 22 }
];

function Table() {
  const tableHeaderStyle = {
    paddingRight: "10px" // Add spacing between "Age" and "Name"
  };

  return (
    <div>
      <table className="table">
        
        <thead>
          <tr>
            <th scope="col" >First Name</th>
            <th scope="col" >Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i}>
              <td colspan="0">{val.name}</td>
              <td colspan="2">{val.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 
  );
}

export default Table;
