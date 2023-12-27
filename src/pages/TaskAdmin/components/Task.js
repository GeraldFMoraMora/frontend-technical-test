import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import "../styles/Task.css";

function Task({ id, text, onDragStart, onDeleteTask }) {
    const handleDragStart = (e) => {
        onDragStart(e, text);
    };

    const handleDelete = () => {
        onDeleteTask(id);
    };

    return(
        <div className="individual-task-div" draggable onDragStart={handleDragStart}>
            <div 
                className="task-text"
            >
                { text }
            </div>
            <div 
                className="task-div-icon"
                onClick={ handleDelete }
            >
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
        </div>

    );

}
export default Task;