import '../styles/FormSignUp.css';
import { Home } from '../../Home/components/Home';
import { SignUpValidationService } from '../services/SignUpValidationService';

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
    } = SignUpValidationService();

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