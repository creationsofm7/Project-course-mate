import React from 'react';
import Login from './components/login';

export default function Home() {
  return (
    <div className='center-this'>
      <Login />
    </div>
  );
}



///TO-DO
// IF A USER IS LOGGED IN, REDIRECT TO Search PAGE
// IF A USER IS NOT LOGGED IN, REDIRECT TO LOGIN PAGE 