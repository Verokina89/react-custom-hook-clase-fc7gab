// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import useCounter from './hooks/useCounter';
import './App.css';

// const useCounter = () => {
//   const [count, setCount] = useState(0);

//   const increase = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return {
//     count,
//     increase,
//     decrement,
//     reset,
//   };
// };

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase, decrement, reset } = useCounter();
  const countA = useCounter(10);
  const countB = useCounter();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <div>count is {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>RESET</button> */}
        <div>count is {count}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>RESET</button>

        <h2>Count A:</h2>
        <div>count is {countA.count}</div>
        <button onClick={countA.increase}>+</button>

        <button onClick={countA.reset}>RESET A</button>

        <h2>Count B:</h2>
        <div>count is {countB.count}</div>
        <button onClick={countB.increase}>+</button>

        <button onClick={countB.reset}>RESET B</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
