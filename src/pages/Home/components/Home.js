import '../styles/Home.css'
import { FormSignUp } from '../../SignUp/components/FormSignUp';
import { FormLogin } from '../../Auth/components/FormLogin';
import { useState } from 'react';

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
                    <button className='btn-sign' onClick={handleSignUpBtn}>Sign Up</button>
                    <button className='btn-log' onClick={handleLoginBtn}>Login</button>
                </div>
            </div>)}
            <div className='component-div'>
                {selectedComponent}
            </div>
        </div>
    );
}