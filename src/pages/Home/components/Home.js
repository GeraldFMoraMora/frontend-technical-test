import '../styles/Home.css'
import { FormSignUp } from '../../SignUp/components/FormSignUp';
import { FormLogin } from '../../Auth/components/FormLogin';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Home () {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleLoginBtn = () => {
        setSelectedComponent(<FormLogin/>);
    };

    const handleSignUpBtn = () => {
        setSelectedComponent(<FormSignUp />);
    };

    return(
        <div className='home-principal-div'>
            {selectedComponent === null && (
            <div className='home-content-div'>
                <div className='title-home-div'>
                    <h1>Welcome</h1>
                </div>
                <div className='btns-home-div'>
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