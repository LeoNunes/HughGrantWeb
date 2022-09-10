import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counterSlice';
import logo from './logo.svg';
import './App.css';

function App() {

  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  // const handleClick = () => {
  //   dispatch(incremented());
  // }

  const handleClick = () => {
    dispatch(amountAdded(2));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>
          Olá {count}
        </button>
        <p>
          Hello Ju and Matthias! We hava a react app hosted! =D
        </p>
        <p>
          Now with TypeScript!
        </p>
      </header>
    </div>
  );
}

export default App;
