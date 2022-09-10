import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.jsx';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App/>}></Route>
    </Routes>
    
  </React.StrictMode>
  </Router>
);

