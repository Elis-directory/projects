import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Login from './components/Login';
import LandingPage from './components/Landingpage';
import Signup from './components/Signup';
import Header from './components/Header';
import Dashboard from './components/Dashboard';	 
import './App.css';

function App() {
	// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ9LqWFV7mypW3NZLPLnjXXk7qT8cApJg",
  authDomain: "studylite-8096c.firebaseapp.com",
  projectId: "studylite-8096c",
  storageBucket: "studylite-8096c.appspot.com",
  messagingSenderId: "714826295419",
  appId: "1:714826295419:web:6c71ad3334f063d75e5ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path='/Login' element={<Login/>} > </Route>
          <Route path='/signup' element={<Signup/>}> </Route>
	  <Route path='/dashboard' element={<Dashboard/>}> </Route>
          {/* Add more routes as needed */}
        </Routes>
	<LandingPage/>
      </div>
    </Router>
  );
}

export default App;

