import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
