import '../styles/FormSignUp.css';
import { useRef } from 'react';
import { Home } from '../../Home/components/Home';
import { SignUpValidationService } from '../services/SignUpValidationService';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert, ButtonGroup } from 'react-bootstrap';

export function FormSignUp() {
    const {
        user,
        setUser,
        pass,
        tel,
        age,
        setAge,
        gender, 
        error,
        isRegistered,
        handleGenderChange,
        handleSubmit,
        handleTelChange,
        handlePassChange,
        titleAge,
        setTitleAge,
    } = SignUpValidationService();

    const formRef = useRef(null);

    const handleAgeChange = (ageSelected) => {
        setAge(ageSelected);
        setTitleAge(ageSelected);
    };

    return (
        <div className="form-sign-div">
            {!isRegistered === true && (
            <div className="form-sign-content">
                <div className="title-div">
                    <h2>SignUp</h2>
                </div>
                <form 
                    ref={formRef}
                    className="formSignUp"
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
                        onChange={handlePassChange}
                        placeholder="Enter your password"
                    />
                    <input 
                        className="input-data"
                        type="text"
                        value={tel}
                        onChange={handleTelChange}
                        placeholder="Enter your phone number (0000-0000)"
                    />
                    <ButtonGroup className='select-combobox'>
                        <DropdownButton 
                            as={ButtonGroup} 
                            title={titleAge} 
                            id="bg-nested-dropdown"
                            defaultValue={age}
                        >
                            <Dropdown.Item eventKey="1" onClick={() => handleAgeChange("10-17")}>10-17</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => handleAgeChange("18-30")}>18-30</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onClick={() => handleAgeChange("31-50")}>31-50</Dropdown.Item>
                            <Dropdown.Item eventKey="4" onClick={() => handleAgeChange("51-64")}>51-64</Dropdown.Item>
                            <Dropdown.Item eventKey="5" onClick={() => handleAgeChange("65+")}>65+</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <div className="radio-options-div">
                        <div className="radio-and-label">
                            <input
                                className="radio"
                                type="radio"
                                name="Gender"
                                value="Women"
                                checked={gender === 'Women'}
                                onChange={handleGenderChange}
                            />
                            <label>Women</label>
                        </div>
                        <div className="radio-and-label">
                            <input
                                className="radio"
                                type="radio"
                                name="Gender"
                                value="Men"
                                checked={gender === 'Men'}
                                onChange={handleGenderChange}
                            />
                            <label>Men</label>
                        </div>
                        
                    </div>
                    <Button type='submit' className="btn-register">Register now</Button>{' '}
                    {error && 
                        <Alert className="error-message" key={'warning'} variant={'warning'}>
                            {error}
                        </Alert>
                    }
                </form>
                
            </div>)}
            {isRegistered === true && (
            <div className='component-div'>
            {<Home/>}
            </div>)}

        </div>
    );
}