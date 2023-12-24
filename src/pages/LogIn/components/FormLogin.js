import '../styles/FormLogin.css';
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

        setUserName([user])

    }


    return (
        <section>
            <h1>Login</h1>
            <form 
                className='formlogin'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <input 
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <button>Iniciar Sesion</button>

            </form>
            {error && <p>All fields are requisite</p>}
        </section>
    );
}