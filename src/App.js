import './styles/App.css';
import TaskList from './pages/Task/components/TaskList';
import appLogo from './images/tasklogo.jpg';
import { FormLogin } from './pages/Auth/components/FormLogin';
import { useState } from 'react';
import { FormSignUp } from './pages/SignUp/components/FormSignUp'
import { FormProfile } from './pages/Profile/components/FormProfile';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from './pages/Home/Home';
import {Auth} from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import TaskAdmin from './pages/TaskAdmin/TaskAdmin';
import Layout from './Layout';


export default function App() {

  return (
    <>
    <div className="app-task">
      
      <div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
        />
      </div>
      <div className='task-list-principal'>
        
      <Home/>
        
      </div>

    </div>
    </>
  );
}


