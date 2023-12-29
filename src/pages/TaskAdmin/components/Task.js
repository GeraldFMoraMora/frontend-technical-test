import { AiOutlineCloseCircle, AiFillFileImage } from "react-icons/ai";
import React, { useState } from "react";
import "../styles/Task.css";
import TaskService from "../services/TaskService";
import AvatarEditor from "react-avatar-editor";

function Task({ id, text, onDragStart, onDeleteTask }) {
    const {
        handleDragStart,
        handleDelete,
    } = TaskService(id, text, onDragStart, onDeleteTask);

    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div className="individual-task-div" draggable onDragStart={handleDragStart}>
            <div 
                className="task-text"
            >
                { text }
            </div>
            { image && (
                <AvatarEditor
                    image={image}
                    width={40}
                    height={40}
                    border={1}
                    color={[255,255,0,0.6]}
                    scale={1}
                />
            )}
            <div 
                className="task-img-div-icon"
            >
                <label htmlFor={`fileInput-${id}`} className="img-icon-label">
                    <AiFillFileImage className="img-icon" />
                </label>
                <input
                    type="file"
                    id={`fileInput-${id}`}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
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