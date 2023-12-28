import '../styles/FormLogin.css';
import { useState } from 'react';
import { login } from '../services/authService';
import { FormProfile } from '../../Profile/components/FormProfile'
import Form from '../../Task/components/Form';
import TaskAdmin from '../../TaskAdmin/components/TaskAdmin';
import { AuthService } from '../services/authService';

export function FormLogin() {
    const {
        user,
        pass,
        setUser,
        setPass,
        error,
        isLoggedIn,
        handleSubmit,
    } = AuthService();
    
    return (
        <section>
            <div className='login-div'>
                {isLoggedIn === false && (
                <div className='login-elements-div'>
                    <div className="title-div">
                        <h2 className='title-h2'>Login</h2>
                    </div>
                    <form 
                        className='form-login'
                        onSubmit={handleSubmit}
                    >
                        <input 
                            className="input-data"
                            type="text"
                            value={user}
                            onChange={e => setUser(e.target.value)}
                            placeholder="Enter your username"
                        />
                        
                        <input 
                            className="input-data"
                            type="password"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <button className='btn-login'>Iniciar Sesion</button>

                    </form>
                    {error && <p className='error-message'>Authentication failed</p>}
                </div>)}
                {isLoggedIn === true && error === false && (
                <div>
                    <TaskAdmin/>
                </div>)}
            </div>
            
        </section>
    );
}