import { useState } from 'react'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login';
import Curriculum from './views/Curriculum';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cv' element={<Curriculum/>} />
      </Routes>
    </Router>
  )
}

export default App
