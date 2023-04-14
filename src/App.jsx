import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login';
import Curriculum from './views/Curriculum';


function App() {
  const [count, setCount] = useState(0)

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
