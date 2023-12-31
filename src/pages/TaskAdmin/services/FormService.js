import { useState } from "react";

const FormService = (onAddTask, customer, token) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e => {
        e.preventDefault(); 

        onAddTask(input, customer.id, token);
        
    }
    return {
        input,
        handleChange,
        handleSend,
    };
}
export default FormService;