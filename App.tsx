import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Architecture from './components/Architecture';
import CaseStudy from './components/CaseStudy';
import Features from './components/Features';
import Stats from './components/Stats';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Architecture />
        <CaseStudy />
        <Features />
        <Stats />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;