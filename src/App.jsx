import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from './pages/Login.jsx'
import { SignUp } from './pages/Signup.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
