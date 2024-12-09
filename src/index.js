import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import WindowContext from './context/WindowContext';
import ContextChange from './context/ChangePA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <ContextChange>
    <WindowContext>
    <Router>
      <App />
    </Router>
    </WindowContext>
    </ContextChange>
);

