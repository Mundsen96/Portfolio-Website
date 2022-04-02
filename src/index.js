import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Main from './Main';
import Footer from './components/Footer/Footer'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);

