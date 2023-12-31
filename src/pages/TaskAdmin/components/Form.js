import React from "react";
import "../styles/Form.css";
import FormService from "../services/FormService";

function Form( props ){ 

    const {
        handleChange,
        handleSend,
    } = FormService(props.onAddTask, props.customer, props.token);
    
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