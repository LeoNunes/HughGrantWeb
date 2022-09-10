import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AppFrame.css';

export default () => {
  return (
    <div>
      <header className='App-header'>
        <div className='Header'>
          <Link to='/'>
            <img className='Logo' src='/images/logo.png' />
          </Link>
          <p className='Title'>Hugh Grant Project</p>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}