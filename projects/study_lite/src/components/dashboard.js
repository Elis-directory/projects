import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="card">
        <h2>Interactive Lessons</h2>
        <p>Engaging lessons that make learning fun.</p>
        <button onClick={() => alert('Interactive Lessons clicked!')}>Explore Lessons</button>
      </div>
      <div className="card">
        <h2>Collaborative Projects</h2>
        <p>Work on projects with friends and classmates.</p>
        <button onClick={() => alert('Collaborative Projects clicked!')}>Start a Project</button>
      </div>
      <div className="card">
        <h2>Progress Tracking</h2>
        <p>Monitor your learning progress over time.</p>
        <button onClick={() => alert('Progress Tracking clicked!')}>View Progress</button>
      </div>
    </div>
  );
};

export default Dashboard;
