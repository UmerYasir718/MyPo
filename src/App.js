import React from 'react'
import Intro from './myComponets/Intro';
import About from './myComponets/About';
import MyResume from './myComponets/MyResume';
import Portfolio from './myComponets/Portfolio';
import Contact from './myComponets/Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/MyResume" element={<MyResume />}>
        </Route>
        <Route path="/Portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/Contact" element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
