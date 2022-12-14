import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default () => {
  return (
    <div className='Home-Content'>
      <p>Click <Link to='speed-test'>here</Link> to measure your reading speed</p>
      <p>Click <Link to='reader'>here</Link> to open the epub reader</p>
      <p>Click <Link to='text'>here</Link> to open the plain text reader</p>
      <p>Click <Link to='sound'>here</Link> to open the sound player</p>
    </div>
  );
}