import '../styles/ButtonsHome.css'
import { FormSignUp } from '../../SignUp/components/FormSignUp';
import { FormLogin } from '../../Auth/components/FormLogin';
import {Auth} from '../../Auth/Auth';
import SignUp from '../../SignUp/SignUp';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function ButtonsHome () {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleLoginBtn = () => {
        setSelectedComponent(<Auth/>);
    };

    const handleSignUpBtn = () => {
        setSelectedComponent(<SignUp />);
    };

    return(
        <div className='home-principal-div'>
            {selectedComponent === null && (
            <div className='home-content-div'>
                <div className='title-home-div'>
                    <h2>Welcome!</h2>
                    <p>This is your task organizator app</p>
                </div>
                <div className='btns-home-div'>
                    <h3>Let's start</h3>
                    <Button className='btn-sign' type='submit' onClick={handleSignUpBtn}>Sign Up</Button>{' '}
                    <Button className='btn-log' type='submit' onClick={handleLoginBtn}>Login</Button>{' '}
                </div>
            </div>)}
            <div className='component-div'>
                {selectedComponent}
            </div>
        </div>
    );
}