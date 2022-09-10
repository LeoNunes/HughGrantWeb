import React from 'react';
// import { useAppDispatch, useAppSelector } from './app/hooks';
import { Link } from 'react-router-dom';
// import { incremented, amountAdded } from './features/counter/counterSlice';
import './App.css';

function App() {

  // const count = useAppSelector(state => state.counter.value);
  // const dispatch = useAppDispatch();

  // const handleClick = () => {
  //   dispatch(incremented());
  // }

  // const handleClick = () => {
  //   dispatch(amountAdded(2));
  // }

  return (
    <div>
      <header className="App-header">
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src='/images/logo.png' style={{ width: 150, height: 75 }}/>
          <p style={{ marginLeft: 20, fontSize: 20 }}>Hugh Grant Project</p>
        </div>
      </header>
      <div className='Content'>
        <p>To start, read a paragraph while we mesure the time it takes.</p>
        <p>Click here to start</p>
        {/* <button onClick={handleClick}>
          Olá {count}
        </button> */}
      </div>
    </div>
  );
}

export default App;
