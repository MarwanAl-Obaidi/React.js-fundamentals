import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstname: '', age: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const showAlert = () => {
    if (person.age < 18) {
      alert(`You are too young`);
    }
    if (person.age >= 18) {
      alert(`Hello ${person.firstname}`);
    }
  }

  return (
    <div className="App">
      Name: {person.firstname} Age: {person.age}<br />
      <input type="text" placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
      <input type="number" placeholder="age" name="age" value={person.age} onChange={inputChanged} />
      <button onClick={showAlert}>Submit</button>
    </div>
  );
}

export default App;