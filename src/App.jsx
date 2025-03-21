import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from './pages/Login'
import { Signup } from './pages/Signup'

function App() {

  return (
    <>
      {/* <div>frontend</div> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
