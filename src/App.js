
import { useSelector } from 'react-redux';
import './App.css';


function App() {

  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>The Count is set to</h1>
      <h2>{count}</h2>
      <br/>
      <button> Increase the Count! </button>
      <button> Decrease the Count! </button>

    </div>
  );
}

export default App;
