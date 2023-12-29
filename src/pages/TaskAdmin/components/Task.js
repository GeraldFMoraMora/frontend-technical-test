import { AiOutlineCloseCircle, AiFillFileImage } from "react-icons/ai";
import React from "react";
import "../styles/Task.css";
import TaskService from "../services/TaskService";

function Task({ id, text, onDragStart, onDeleteTask }) {
    const {
        handleDragStart,
        handleDelete,
    } = TaskService(id, text, onDragStart, onDeleteTask);

    return(
        <div className="individual-task-div" draggable onDragStart={handleDragStart}>
            <div 
                className="task-text"
            >
                { text }
            </div>
            <div 
                className="task-img-div-icon"
            >
                <AiFillFileImage className="img-icon"/>
            </div>
            <div 
                className="task-delete-div-icon"
                onClick={ handleDelete }
            >
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
        </div>

    );

}
export default Task;