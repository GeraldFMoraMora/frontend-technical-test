import React from "react";
import appLogo from '../../images/tasklogo.jpg';
import { FormLogin } from './components/FormLogin';
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import { Outlet, Route, Routes } from "react-router-dom";


export function Auth() {
    return (
        <div className="auth-principal-div">
            <div className='component-div'>
                <FormLogin />
            </div>
            


        </div>
    );
}

