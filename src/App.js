import './styles/App.css';
import appLogo from './images/tasklogo.jpg';
import "bootstrap/dist/css/bootstrap.css";

import Home from './pages/Home/Home';


export default function App() {

  return (
    <>
    <div className="app-task">
      
      <div className='icon-div'>
        <img 
          src={appLogo}
          className='icon'
          alt=''
        />
      </div>
      <div className='task-list-principal'>
        
      <Home/>
        
      </div>

    </div>
    </>
  );
}


