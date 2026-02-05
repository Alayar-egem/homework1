import React from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
