import React, {useContext} from 'react';
import counterContext from './counterContext';

function App() {
//Destcting our global states from useContext hook
  const {counter, increment, decrement} = useContext(counterContext)

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count-wrapper">
        {/* Using the functions increment and decrement to add or subtract from counting with on click buttons, with + and - */}
      <button onClick={decrement}>-</button>  
        <span>{counter}</span>
        <button onClick={increment}>+</button>   
      </div>
    </div>
  );
}

export default App;