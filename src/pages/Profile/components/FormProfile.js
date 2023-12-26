import '../styles/FormProfile.css'
import { findByName } from '../services/profileService';
import { useState, useEffect } from 'react';

export function FormProfile() {
    const [userData, setUserData] = useState({
        name : "",
        password : "",
        phone : "",
        age : "",
        gender : "",
    });

    useEffect( () => {
        const fetchUserData = async () => {
            try {
                const data = await findByName('Misael');
                setUserData(data);
            } catch (error){
                console.error('Error al obtener los datos del usuario: ', error.message);
            }
        };
        fetchUserData();
        
    }, []

    );

    return (
        <div className='form-profile-div'>
            <div className='title-div'>
                <h2>User Profile</h2>
            </div>
            <div className='info-div'>
                <p><strong>User name:</strong> {userData.name}</p>
                <p><strong>Password:</strong> {userData.password}</p>
                <p><strong>Telephone:</strong> {userData.phone}</p>
                <p><strong>Age:</strong> {userData.age}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
            </div>
        </div>
    );
}