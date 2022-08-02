
import './App.css';
import React from 'react';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <BlogList/>
      <Footer />
    </div>
  );
}

export default App;
