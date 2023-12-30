import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import TaskAdmin from './pages/TaskAdmin/TaskAdmin';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
