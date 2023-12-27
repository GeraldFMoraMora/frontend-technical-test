import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import "../styles/Task.css";

function Task({text}){
    return(
        <div className="individual-task-div">
            <div 
                className="task-text"
            >
                { text }
            </div>
            <div 
                className="task-div-icon"
            >
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
        </div>

    );

}
export default Task;