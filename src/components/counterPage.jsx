// CounterPage.js
import { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  }; 
  return (
    <div className='counter'>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
      <button className='btn' onClick={reset}>Reset</button>
      <input className='input' type="text" inputMode="numeric" value={count} onChange={handleInputChange} />
    </div>
  );
};

export default CounterPage;