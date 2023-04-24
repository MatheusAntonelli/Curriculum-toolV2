import React from 'react'
import '../App.css'
import { Button } from 'dracula-ui'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='main-section'>
      <h1>Criar curriculos nunca foi tão facil!</h1>
      <Link to={'/criar'}><Button color='purple'>Comece seu curriculo</Button></Link>
      
      <Footer/>
    </div>
  )
}

export default Home
 