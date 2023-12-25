import '../styles/FormLogin.css';
import { CiUser } from 'react-icons/ci'
import { useState } from 'react';

export function FormLogin({ setUserName }) {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(user === "" || pass === ""){
            setError(true)
            return
        }
        setError(false)


    }


    return (
        <section>
            <div className='login-div'>
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
                {error && <p className='error-message'>All fields are requisite</p>}
            </div>
            
        </section>
    );
}