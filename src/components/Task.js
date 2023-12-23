import React from "react";
import "../styles/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({id, text, iscomplete, finishTask, deleteTask}){
    return (
        <div className={iscomplete ? 'task-div completed' : 'task-div'}>
            <div 
                className="task-text"
                onClick={() => finishTask(id)}
            >
                { text }
            </div>
            <div 
                className="task-div-icon"
                onClick={() => deleteTask(id)}
            >
                <AiOutlineCloseCircle className="task-icon"/>
            </div>

        </div>
    );
}

export default Task;