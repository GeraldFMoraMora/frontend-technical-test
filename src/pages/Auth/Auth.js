import React from "react";
import appLogo from '../../images/tasklogo.jpg';
import { FormLogin } from './components/FormLogin';


function Auth() {
    return (
        <div className="auth-principal-div">
            <div className='component-div'>
                <FormLogin/>
            </div>


        </div>
    );
}

export default Auth;