import { AiOutlineCloseCircle, AiFillFileImage } from "react-icons/ai";
import React, { useEffect } from "react";
import "../styles/Task.css";
import { TaskService } from "../services/TaskService";
import AvatarEditor from "react-avatar-editor";

function Task( props ) {
    const {
        handleDragStart,
        handleDelete,
        handleImageUpload,
        handleSaveImage,
        image,
        editorRef,
        convertImage64toBlobUrl,
    } = TaskService(props.id, props.text, props.state, props.onDragStart, props.onDeleteTask, props.onImageAdd);

    useEffect(() => {
        convertImage64toBlobUrl(props.image64);
      }, [props.image64]);

    return(
        <div className="individual-task-div" draggable onDragStart={handleDragStart}>
            <div 
                className="task-text"
            >
                { props.text }
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
                <label htmlFor={`fileInput-${props.id}`} className="img-icon-label">
                    <AiFillFileImage className="img-icon" />
                </label>
                <input
                    type="file"
                    id={`fileInput-${props.id}`}
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