import { useState, useRef } from "react";
import { signUpConnectService } from './SignUpConnectService';

export const SignUpValidationService = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('18-30');
    const [titleAge, setTitleAge] = useState('Age');
    const [gender, setGender] = useState('');
    const [error, setError] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorDescription, setErrorDescription] = useState(null);
    const formRef = useRef(null);

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
            await signUpConnectService(user, pass, tel, age, gender, true);
            setError(false);
            setIsRegistered(true);
        }catch(error){
            console.error('Error at register user: ', error.message);
            setError(true);
            setErrorDescription(error.message);
        }
        
        
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
    const handleAgeChange = (ageSelected) => {
        setAge(ageSelected);
        setTitleAge(ageSelected);
    };
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
    return {
        user,
        setUser,
        pass,
        setPass,
        tel,
        setTel,
        age,
        setAge,
        gender, 
        setGender,
        error,
        setError,
        isRegistered,
        setIsRegistered,
        handleGenderChange,
        handleSubmit,
        handleTelChange,
        formatPhoneNumber,
        handlePassChange,
        validatePass,
        titleAge,
        setTitleAge,
        formRef,
        handleAgeChange,
        errorDescription,
    };


};