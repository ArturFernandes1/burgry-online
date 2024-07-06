import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./components/GlobalStyles.css" // Importe o arquivo CSS global
import Home from './pages/home.jsx'
import Sobre from './pages/Sobre.jsx'
import Cardapio from './pages/Cardapio.jsx'
import Contato from './pages/Contato.jsx'

function App() {
  return (
     
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
  
  )
}

export default App
