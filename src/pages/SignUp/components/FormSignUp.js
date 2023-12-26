import { useState } from "react";
import '../styles/FormSignUp.css';
import { signUp } from '../services/SignUpService';
import { Home } from '../../Home/components/Home';

export function FormSignUp() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('18-30');
    const [gender, setGender] = useState('');
    const [error, setError] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if(
            user === "" || 
            pass === "" || 
            tel === ""||
            age === "" ||
            gender === ""){
                setError('Any field can\'t be empty')
            return
        }
        
        try{
            await signUp(user, pass, tel, age, gender);
        }catch{
            console.error('Error at register user: ', error.message);
            setError(true);
        }
        setError('');
        setIsRegistered(true);
        
    }

    const handleTelChange = (e) => {
        const formattedNumber = formatPhoneNumber(e.target.value);
        setTel(formattedNumber);
    } 

    const formatPhoneNumber = (input) => {
        const phoneNumber = input.replace(/\D/g, '');

        const formattedPhoneNumber = phoneNumber.replace(/(\d{4})(\d{4})/, '$1-$2');

        return formattedPhoneNumber;
    }

    const handlePassChange = (e) => {
        const newPass = e.target.value;
        setPass(newPass);

        if (validatePass(newPass)){
            setError('');
        }else{
            setError('Invalid password format');
        }
    }

    const validatePass = (password) => {
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLengthValid = password.length >= 8 && password.length <= 12;

        return (
            hasLetter &&
            hasNumber &&
            hasUpperCase &&
            !hasSpecialChar &&
            isLengthValid
        );
    }

    return (
        <div className="form-sign-div">
            {!isRegistered === true && (
            <div className="form-sign-content">
                <div className="title-div">
                    <h2>SignUp</h2>
                </div>
                <form 
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
                    <select 
                        name="Age"
                        className="select-combobox"
                        value={age}
                        onChange={e=> setAge(e.target.value)}
                    >
                        <option>10-17</option>
                        <option>18-30</option>
                        <option>31-50</option>
                        <option>51-64</option>
                        <option>65+</option>
                    </select>
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
                    <button
                        className="btn-register"
                    >   
                        Register now
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>)}
            {isRegistered === true && (
            <div className='component-div'>
            {<Home/>}
            </div>)}

        </div>
    );
}