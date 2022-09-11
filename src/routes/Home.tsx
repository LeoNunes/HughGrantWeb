import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default () => {
  return (
    <div className='Home-Content'>
      <p>Click <Link to='speed-test'>here</Link> to measure your reading speed</p>
      <p>Click <Link to='reader'>here</Link> to open the reader</p>
    </div>
  );
}