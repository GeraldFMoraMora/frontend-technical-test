import { useState } from "react";
import '../styles/FormSignUp.css';

export function FormSignUp() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('18-30');
    const [gender, setGender] = useState('');
    const [error, setError] = useState(false);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(
            user === "" || 
            pass === "" || 
            tel === ""||
            age === "" ||
            gender === ""){
                setError(true)
            return
        }
        setError(false);
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

    return (
        <div className="form-sign-div">
            <form 
                className="formSignUp"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="Enter your username"
                />
                <input 
                    type="password"
                    value={pass}
                    onChange={e=> setPass(e.target.value)}
                    placeholder="Enter your password"
                />
                <input 
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
                    <div>
                        <input
                            type="radio"
                            name="Gender"
                            value="Women"
                            checked={gender === 'Women'}
                            onChange={handleGenderChange}
                        />
                        <label>Women</label>
                    </div>
                    <div>
                        <input
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
            {error && <p>All fields are requisite</p>}

        </div>
    );
}