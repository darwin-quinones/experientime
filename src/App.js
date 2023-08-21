import React from 'react'
import {Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter.js';
import NavBar from './NavBar.js';


function App() {
  return (
    <>
      <NavBar/>
      <AppRouter/>
    </>
  );
}

export default App;
