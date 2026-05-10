import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import MovieWall from './components/MovieWall';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <ParticlesBackground />
      
      {/* Main Content Container with relative positioning to sit above particles */}
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <MovieWall />
        <Timeline />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
