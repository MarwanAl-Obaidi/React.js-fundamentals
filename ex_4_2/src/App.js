import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.message.length < 10 ? props.message : 'Too Long'}
    </div>
  );
}

export default App;