import './styles/App.css';
import TaskList from './pages/Task/components/TaskList';
import appLogo from './images/tasklogo.jpg';
import { FormLogin } from './pages/Auth/components/FormLogin';
import { Home } from './pages/Home/components/Home';
import { useState } from 'react';
import { FormSignUp } from './pages/SignUp/components/FormSignUp'
import { FormProfile } from './pages/Profile/components/FormProfile';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/NavBar';


function App() {
  const [userName, setUserName] = useState('');
  const [loginFlag, setLoginFlag] = useState(false);

  return (
    <>
    <NavBar/>
    <div className="app-task">
      
      <div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
        />
      </div>
      <div className='task-list-principal'>
        
        <Home/>

        <p>{userName}</p>
        
        
      </div>

    </div>
    </>
  );
}

export default App;
