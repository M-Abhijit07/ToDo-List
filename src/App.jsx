import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CSSBaseline from "@mui/material/CssBaseline"
import TodoList from './ToDO'
import Navbar from './Navbar';

function App() {

  return (
    <>
      <CSSBaseline/>
      <Navbar/>
      <TodoList />
    </>
  )
}

export default App;
