import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from './pages/Login.jsx'
import { SignUp } from './pages/Signup.jsx'

function App() {

  return (
    <>
      {/* <div>frontend</div> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
