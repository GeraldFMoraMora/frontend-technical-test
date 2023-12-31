import React from "react";
import { FormSignUp } from './components/FormSignUp';
import './styles/SignUp.css';

function SignUp() {
    return (
        <div className="signup-principal-div">
            <div className='component-div'>
                <FormSignUp/>
            </div>
        </div>
    );
}

export default SignUp;