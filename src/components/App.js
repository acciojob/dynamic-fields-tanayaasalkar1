
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "", age: "" }
  ]);

  // Handle Name and Age input changes
  function handleInput(e, id) {
    const { name, value } = e.target;

    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, [name]: value }
          : user
      )
    );
  }

  // Add new Name and Age fields
  function handleAdd() {
    const newUser = {
      id: Date.now(),
      name: "",
      age: ""
    };

    setUsers([...users, newUser]);
  }

  // Remove a particular field
  function handleRemove(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(users);
  }

  return (
    <div>
      <h2>Dynamic Fields</h2>

      <form onSubmit={handleSubmit}>

        {users.map((user) => (
          <div key={user.id}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => handleInput(e, user.id)}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={user.age}
              onChange={(e) => handleInput(e, user.id)}
            />

            <button
              type="button"
              onClick={() => handleRemove(user.id)}
            >
              Remove
            </button>

            <br />
            <br />

          </div>
        ))}

        <button type="button" onClick={handleAdd}>
          Add Fields
        </button>

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;
