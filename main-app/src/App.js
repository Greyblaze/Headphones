import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navbar} from './components/Navbar';
import { Home } from './components/Home';
import {Sponsor} from './components/Sponsor';
import {Spec} from './components/Spec';
import {Case} from './components/Case';
import {Banner} from './components/Banner';
import {Style} from './components/Style';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sponsor />
      <Spec />
      <Case />
      <Banner />
      <Style />
      <Footer />
    </div>
  );
}

export default App;
