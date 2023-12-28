import { useState } from "react";

const FormService = (onAddTask) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e => {
        e.preventDefault(); 

        onAddTask(input);
        
    }
    return {
        input,
        handleChange,
        handleSend,
    };
}
export default FormService;