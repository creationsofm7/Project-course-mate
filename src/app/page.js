
"use server"

import React from 'react';
import Login from './components/login';







export default async function Home() {

 
  
  return (
    <>


 
      <Login />
    
    </>
  );
}



///TO-DO
// IF A USER IS LOGGED IN, REDIRECT TO Search PAGE
// IF A USER IS NOT LOGGED IN, REDIRECT TO LOGIN PAGE 