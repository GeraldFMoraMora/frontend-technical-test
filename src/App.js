import './styles/App.css';
import TaskList from './pages/Task/components/TaskList';
import appLogo from './images/tasklogo.jpg';
import { FormLogin } from './pages/LogIn/components/FormLogin';
import { Home } from './pages/Home/components/Home';
import { useState } from 'react';
import { FormSignUp } from './pages/SignUp/components/FormSignUp'
import { FormProfile } from './pages/Profile/components/FormProfile';


function App() {
  const [userName, setUserName] = useState([]);
  const [loginFlag, setLoginFlag] = useState(false);
  const [SignUpFlag, setSignUpFlag] = useState(false);

  return (
    <div className="app-task">
      <div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
        />
      </div>
      <div className='task-list-principal'>
        {/*<h1>My task</h1>
        <TaskList/>
        <FormProfile/>
        <FormSignUp/>
        <FormLogin setUserName={setUserName}/>
        */}

        {!loginFlag && !SignUpFlag && (
          <Home setLoginFlag={setLoginFlag} setSignUpFlag={setSignUpFlag} />
        )}
        {loginFlag === true && SignUpFlag === false && (
          <FormLogin setUserName={''} />
        )}
        {loginFlag === false && SignUpFlag === true && <FormSignUp />}
        
        
      </div>

    </div>
  );
}

export default App;
