import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login';
import LandingPage from './components/Landingpage';
import Signup from './components/Signup';
import Header from './components/Header'; // Assuming you have a Header component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path='/Login' element={<Login/>} > </Route>
          <Route path='/signup' element={<Signup/>}> </Route>
          {/* Add more routes as needed */}
        </Routes>
	<LandingPage/>
      </div>
    </Router>
  );
}

export default App;

