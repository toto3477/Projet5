
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Apropos from "./pages/Apropos"
import Erreur from "./pages/Erreur"
import DescriptionCard from './pages/DescriptionCard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Apropos' element={<Apropos />} />
        <Route path="/DescriptionCard/:id" element={<DescriptionCard />} />
        <Route path='/Erreur' element={<Erreur />} />
        <Route path='*' element={<Erreur />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

