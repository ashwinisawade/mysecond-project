import React from 'react';

const data = [
  { fname: 'Mark', lname: 'Otto', handle: '@mdo' },
  { fname: 'Jacob', lname: 'Thornton', handle: '@fat' },
  { fname: 'Larry the Bird', lname: 'Otto', handle: '@twitter' }
];

function TableList() {
  const tableHeaderStyle = {
    paddingRight: "10px"
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{val.fname}</td>
              <td>{val.lname}</td>
              <td>{val.handle}</td>
            </tr>
          ))}
        </tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </table>
    </div>
  );
}

export default TableList;
