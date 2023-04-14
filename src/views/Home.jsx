import React from 'react'
import '../App.css'
import { Button } from 'dracula-ui'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='main-section'>
      <h1>Criar curriculos nunca foi tão facil!</h1>
      <Button color='purple'>Comece seu curriculo</Button>
      <Footer/>
    </div>
  )
}

export default Home
 