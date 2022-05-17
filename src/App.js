
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';


function App() {

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is set to</h1>
      <h2>{count}</h2>
      <br/>
      <button onClick={() => dispatch(increment())}> Increase the Count! </button>
      <button onClick={() => dispatch(decrement())}> Decrease the Count! </button>
      <button onClick={() => dispatch(incrementByAmount(Math.random()*10))}> Increase by Random! </button>

    </div>
  );
}

export default App;
