import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import bg from './assets/bg.svg'
import Homepage from './pages/Homepage'
import Hero from './components/hero'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <div className='main'>
     
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
