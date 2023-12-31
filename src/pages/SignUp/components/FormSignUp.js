import '../styles/FormSignUp.css';
import { ButtonsHome } from '../../Home/components/ButtonsHome';
import { SignUpValidationService } from '../services/SignUpValidationService';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert, ButtonGroup, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

export function FormSignUp() {
    const {
        user,
        setUser,
        pass,
        tel,
        age,
        gender, 
        error,
        isRegistered,
        handleGenderChange,
        handleSubmit,
        handleTelChange,
        handlePassChange,
        titleAge,
        formRef,
        handleAgeChange,
    } = SignUpValidationService();

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
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        />
                    </InputGroup>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your password"
                        value={pass}
                        onChange={handlePassChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-12 characters long, contain only upper and lower case letters and numbers,
                        and must not contain special characters, or emoji.
                    </Form.Text>
                    <Form.Control
                        type="text"
                        id="inputphonenum"
                        aria-describedby="basic-addon1"
                        placeholder="Enter your phone number"
                        value={tel}
                        onChange={handleTelChange}
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
            {<ButtonsHome/>}
            </div>)}

        </div>
    );
}