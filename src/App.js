import React from 'react';
import './App.css';

import { Header } from './components/Header/Header.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Profile } from './components/Profile/Profile.jsx'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  )
}

export default App;
