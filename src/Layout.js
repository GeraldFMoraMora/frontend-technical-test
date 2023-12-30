import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import './styles/Layout.css';
import appLogo from './images/tasklogo.jpg';


const Layout = () => {
  return (
    <>

      <nav className="nav-floating" >
        <ul className="nav-floating-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/taskadmin">Task</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      
    </>
  )
};

export default Layout;