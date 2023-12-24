import './styles/App.css';
import TaskList from './components/TaskList';
import appLogo from './images/tasklogo.jpg';
import { FormLogin } from './components/FormLogin';
import { Home } from './components/Home';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState([]);

  return (
    <div className="app-task">
      {/*<div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
        />
      </div>*/}
      {/*<div className='task-list-principal'>
        <h1>My task</h1>
        <TaskList/>
      </div>*/}
      {
        !userName.length > 0 
        ? <FormLogin setUserName={setUserName}/>
        : <Home userName={userName}/>
      }
    </div>
  );
}

export default App;
