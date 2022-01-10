import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumberOne] = useState(0);
  const [number2, setNumberTwo] = useState(0);
  const [total, setTotal] = useState(0);

  function numberOne(event) {
    setNumberOne(Number(event.target.value));
  }

  function numberTwo(event) {
    setNumberTwo(+event.target.value);
  }

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  function calculateSubtraction() {
    setTotal(number1 - number2);
  }

  return (
    
    <div>
      <h2>Result = {total}</h2>
      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={numberOne} />
        <input type="number" placeholder="0" onChange={numberTwo} />
      </div>

      <button onClick={calculateTotal}>+</button>
      <button onClick={calculateSubtraction}>-</button>

    </div>
  );
}

export default App;