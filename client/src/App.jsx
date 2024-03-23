import './App.css'
import Homepage from './pages/Homepage'
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
