import { AiOutlineCloseCircle, AiFillFileImage } from "react-icons/ai";
import React, { useState, useRef } from "react";
import "../styles/Task.css";
import TaskService from "../services/TaskService";
import AvatarEditor from "react-avatar-editor";

function Task({ id, text, onDragStart, onDeleteTask }) {
    const {
        handleDragStart,
        handleDelete,
    } = TaskService(id, text, onDragStart, onDeleteTask);

    const [image, setImage] = useState(null);
    const editorRef = useRef();

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

    const handleSaveImage = () => {
        if(editorRef.current){
            const canvas = editorRef.current.getImageScaledToCanvas();
            const base64 = canvas.toDataURL('image/jpeg'); 
            console.log(base64);
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
                    ref={editorRef}
                    image={image}
                    width={40}
                    height={40}
                    border={1}
                    color={[255,255,0,0.6]}
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