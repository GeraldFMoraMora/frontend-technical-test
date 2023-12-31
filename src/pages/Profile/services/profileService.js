import { useState } from 'react';
const API_URL = "http://localhost:8080";


export async function findByName(name) {
    const response = await fetch(`${API_URL}/customer/findByName/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok){
        throw new Error('Error al obtener el usuario solicitado');
    }

    const data = await response.json();
    return data;
}

export const FormProfileService = (customer) => {
    const [userData, setUserData] = useState({
        name : "",
        password : "",
        phone : "",
        age : "",
        gender : "",
    });
    const fetchUserData = async () => {
        try {
            const data = await findByName(customer.name);
            setUserData(data);
        } catch (error){
            console.error('Error al obtener los datos del usuario: ', error.message);
        }
    };

    return {
        userData,
        fetchUserData,
    };
};