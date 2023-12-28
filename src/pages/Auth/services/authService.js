import { useState } from "react";

const API_URL = "http://localhost:8080";

export async function login(name, password) {
    const response = await fetch(`${API_URL}/customer/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
    });
    if (!response.ok){
        throw new Error('Error al autenticar');
    }
    console.log(JSON.stringify({ name, password }));

    const data = await response.json();
    console.log(data);
    return data;
};

export const AuthService = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if(user === "" || pass === ""){
            setError(true)
            return
        }
        setError(false)

        try {
            await login(user, pass);
            setIsLoggedIn(true);

        } catch (error) {
            console.error('Error de autenticacion: ', error.message);
            setError(true);
        }
    };

    return {
        user,
        pass,
        setUser,
        setPass,
        error,
        isLoggedIn,
        handleSubmit,
    };

};