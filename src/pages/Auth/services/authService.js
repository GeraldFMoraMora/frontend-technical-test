import { useState } from "react";
import { useRef } from 'react';

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
    const data = await response.json();

    if(data.error){
        throw new Error(data.message);
    }
    
    return data;
};

export const AuthService = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [errorDescription, setErrorDescription] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [token, setToken] =useState("");
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if(user === "" || pass === ""){
            setError(true)
            return
        }
        setError(false)

        try {
            const data = await login(user, pass);
            setIsLoggedIn(true);
            setCustomer(data.customer);
            setToken(data.token);
        } catch (error) {
            console.error('Error de autenticacion: ', error.message);
            setIsLoggedIn(false);
            setError(true);
            setErrorDescription(error.message);
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
        errorDescription,
        customer,
        setCustomer,
        token,
        formRef,
    };

};