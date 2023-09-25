import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import BelowTheFold from './components/SecondSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
function App() {
  return (
    <>
      <Router>
        <Container maxWidth={'xxl'}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <HomePage />
      <BelowTheFold />
      <HeroSection /> */}
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
