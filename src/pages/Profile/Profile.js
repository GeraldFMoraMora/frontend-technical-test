import appLogo from '../../images/tasklogo.jpg';
import { FormProfile } from './components/FormProfile';
import './styles/Profile.css';


function Profile() {
    return (
        <div className="auth-principal-div">
            <div className='component-div'>
                <FormProfile/>
            </div>
        </div>
    );
}

export default Profile;