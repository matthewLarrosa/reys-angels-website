import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx/'
import Hero from './components/Hero.jsx/'
import Services from './components/Services.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services />
  </React.StrictMode>,
)
