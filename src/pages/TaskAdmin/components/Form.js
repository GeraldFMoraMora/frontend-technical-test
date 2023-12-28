import React, { useState } from "react";
import "../styles/Form.css";
import FormService from "../services/FormService";

function Form( { onAddTask } ){ 

    const {
        handleChange,
        handleSend,
    } = FormService(onAddTask);
    
    return (
        <div className="form-input-div">
            <form 
                className="taask-form"
                onSubmit={handleSend}
            >
                <input 
                className="task-inpt"
                type="text"
                placeholder="Enter a new task"
                name="text"
                onChange={handleChange}
                />
                <button className="add-task-btn">
                    Add task
                </button>

            </form>
        </div>
    );
}

export default Form;