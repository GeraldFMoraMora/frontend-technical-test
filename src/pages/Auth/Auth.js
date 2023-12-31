import React from "react";
import { FormLogin } from './components/FormLogin';


export function Auth() {
    return (
        <div className="auth-principal-div">
            <div className='component-div'>
                <FormLogin />
            </div>
        </div>
    );
}

