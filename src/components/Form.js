import React, { useState } from "react";
import "../styles/Form.css";
import { v4 as uuidv4 } from 'uuid';

function Form(props){ 

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e => {
        e.preventDefault(); 

        console.log("Sending form...");
        
        const newTask = {
            id: uuidv4(),
            text: input,
            iscomplete: false
        }
        props.onSubmit(newTask);
    }
    return (
        <form 
            className="task-form"
            onSubmit={handleSend}
        >
            <input 
            className="task-input"
            type="text"
            placeholder="Enter a new task"
            name="text"
            onChange={handleChange}
            />
            <button className="add-task">
                Add task
            </button>

        </form>
    );
}

export default Form;