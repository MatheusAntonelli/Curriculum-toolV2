import { useState } from 'react'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login';
import Curriculum from './views/Curriculum';
import PersonalInfo from './components/PersonalInfo';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cv' element={<Curriculum/>} />
        <Route path='/criar' element={<PersonalInfo/>} />
      </Routes>
    </Router>
  )
}

export default App
