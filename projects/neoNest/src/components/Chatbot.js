import React from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css';


const Chatbot = () => {

const areas = [
  'Mathematics',
  'Science',
  'History',
  'Language Arts',
  'Physical Education'
];
  return (
<div className="Chatbot">
      <h2>Select a School Area</h2>
      <ul>
        {areas.map((area, index) => (
          <li key={index}>
            {area}
          </li>
        ))}
      </ul>
   



    
      <h2>Chatting about history</h2>
      {/* Chatbot interface goes here */}
      <div className="chat-window">
        {/* Chat messages */}
      </div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>

    </div>
  );
}

export default Chatbot;

