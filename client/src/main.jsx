import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { UserContextProvider } from './providers/userProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <UserContextProvider>

    <App />
    </UserContextProvider>
  </React.StrictMode> 
  </BrowserRouter>
 
)
