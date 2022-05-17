import {useState} from 'react'
import './App.css';


function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h1>The Count is set to</h1>
      <h2>{counter}</h2>
      <br/>
      <button onClick={() => setCounter( counter + 1)}> Increase the Count! </button>
      <button onClick={() => setCounter( counter - 1)}> Decrease the Count! </button>

    </div>
  );
}

export default App;
