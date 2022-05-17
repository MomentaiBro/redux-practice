import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello! The number is {count} </h1>
      <button onClick={() => setCount( count + 1)}> INCREASE THE NUMBER!!!</button>
      <button onClick={() => setCount(count - 1)}> DECREASE THE NUMBER!!!</button>
    </div>
  );
}

export default App;
