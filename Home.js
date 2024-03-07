import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const data = [
  { id: 1, name: "poonam", surname: "Patil", age: 21 },
  { id: 2, name: "Ashwini", surname: "Sawade", age: 22 },
  { id: 3, name: "Pooja", surname: "Sardar", age: 23 }
];

function User() {
  const { id } = useParams();
  const user = data.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

function Home() {
  const [editMode, setEditMode] = useState(null);
  const navigate = useNavigate();

  const toggleEditMode = (id) => {
    setEditMode(editMode === id ? null : id);
  };

  const deleteRow = (id) => {
    // Implement your delete logic here
    // For now, let's just filter out the row from data
    const updatedData = data.filter((row) => row.id !== id);
    // Update the state or send a request to delete from a server
  };

  const logout = () => {
    localStorage.removeItem("login");
    navigate('/login');
  };

  return (
    <div>
      {/* ... (header code) */}

      <table className="table mt-4">
        {/* ... (table header code) */}
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>
                {editMode === val.id ? <input value={val.name} /> : val.name}
              </td>
              <td>
                {editMode === val.id ? <input value={val.surname} /> : val.surname}
              </td>
              <td>
                {editMode === val.id ? <input value={val.age} /> : val.age}
              </td>
              <td>
                <div className="btn-group" role="group" aria-label="Actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => toggleEditMode(val.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteRow(val.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
        {data.map((user) => (
          <Link to={`/user/${user.id}`} className="btn btn-success me-md-2" key={user.id}>
            View User {user.id}
          </Link>
        ))}
        <button type="button" className="btn btn-success me-md-2" onClick={logout}>
          Logout
        </button>
      </div>

      {/* ... (footer code) */}
    </div>
  );
}

export default Home;
