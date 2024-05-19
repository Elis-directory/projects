import React from 'react';
import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    
      <div>
      <main>
        <section className="hero">
          <h2>Welcome to StudyLite!</h2>
          <p>A fun and interactive way for kids to learn and grow together.</p>
          <button>Get Started</button>
        </section>

        <section id="features" className="cards">
          <div className="card">
            <h3>Interactive Lessons</h3>
            <p>Engaging lessons that make learning fun.</p>
          </div>
          <div className="card">
            <h3>Collaborative Projects</h3>
            <p>Work on projects with friends and classmates.</p>
          </div>
          <div className="card">
            <h3>Progress Tracking</h3>
            <p>Track your progress and achievements.</p>
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; &#8734; BCE StudyLite. All rights reserved.</p>
      </footer>
    </div>
 
  );
};

export default Landingpage;


