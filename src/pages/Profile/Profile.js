import appLogo from '../../images/tasklogo.jpg';
import { FormProfile } from './components/FormProfile';
import './styles/Profile.css';


function Profile( props ) {
    return (
        <div className="auth-principal-div">
            <div className='component-div'>
                <FormProfile customer={props.customer} token={ props.token }/>
            </div>
        </div>
    );
}

export default Profile;