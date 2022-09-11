import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AppFrame.css';

export default () => {
  return (
    <div className='Frame-Container'>
      <div className='Frame-Header'>
        <Link to='/'>
          <img className='Frame-Logo' src='/images/logo.png' />
        </Link>
        <p className='Frame-Title'>Hugh Grant Project</p>
      </div>
      <div className='Frame-Content'>
        <Outlet/>
      </div>
    </div>
  );
}