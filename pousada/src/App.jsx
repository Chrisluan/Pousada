import { useState } from 'react'
import './App.css'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../sections/HeroSection'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </>
  )
}

export default App
