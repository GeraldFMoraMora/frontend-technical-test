import '../styles/FormProfile.css';
import { FormProfileService } from '../services/profileService';
import { useEffect } from 'react';

export function FormProfile() {

    const {
        userData,
        fetchUserData,
    } = FormProfileService();

    useEffect( () => {
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