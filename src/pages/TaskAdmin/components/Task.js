import { AiOutlineCloseCircle, AiFillFileImage } from "react-icons/ai";
import React, { useState, useRef } from "react";
import "../styles/Task.css";
import { TaskService } from "../services/TaskService";
import AvatarEditor from "react-avatar-editor";

function Task({ id, text, state, onDragStart, onDeleteTask, onImageAdd }) {
    const {
        handleDragStart,
        handleDelete,
        handleImageUpload,
        handleSaveImage,
        image,
        editorRef,
    } = TaskService(id, text, state, onDragStart, onDeleteTask, onImageAdd);

    return(
        <div className="individual-task-div" draggable onDragStart={handleDragStart}>
            <div 
                className="task-text"
            >
                { text }
            </div>
            { image && (
                <AvatarEditor
                    ref={editorRef}
                    image={image}
                    width={40}
                    height={40}
                    border={1}
                    color={[0,0,0,0.6]}
                    scale={1}
                    onImageReady={handleSaveImage}
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