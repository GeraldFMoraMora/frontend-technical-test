import './App.css';
import TaskList from './components/TaskList';
import appLogo from './images/tasklogo.jpg';

function App() {
  return (
    <div className="app-task">
      <div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
        />
      </div>
      <div className='task-list-principal'>
        <h1>My task</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
