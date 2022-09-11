import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default () => {
  return (
    <div className='Home-Content'>
      <p>To start, read a paragraph while we mesure the time it takes.</p>
      <p>Click <Link to='speed-test'>here</Link> to start</p>
      <p>Click <Link to='reader'>here</Link> to open the reader</p>
    </div>
  );
}