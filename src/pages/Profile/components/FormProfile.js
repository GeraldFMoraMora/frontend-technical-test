import '../styles/FormProfile.css';
import { FormProfileService } from '../services/profileService';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TaskAdmin from "../../TaskAdmin/TaskAdmin";
import profileLogo from '../../../images/profile_logo.png';

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
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                    variant="top" 
                    src={profileLogo} 
                />
                <Card.Body>
                    <Card.Title><strong>User info:</strong></Card.Title>
                    <Card.Text>
                    <strong>User name:</strong> {userData.name}<br></br>
                    <strong>Telephone:</strong> {userData.telephone}<br></br>
                    <strong>Age:</strong> {userData.age_range}<br></br>
                    <strong>Gender:</strong> {userData.gender === 1 ? 'Men' : 'Women'}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}