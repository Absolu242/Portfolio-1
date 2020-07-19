import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import FileSection from './components/FileSection/FileSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="Portfolio">
      <Navbar/>
      <Hero/>
      <Projects/>
      <FileSection/>
      <Footer/>
    </div>
  );
}

export default App;
