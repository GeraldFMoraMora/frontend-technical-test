import { useRef, useState } from "react";

export function TaskService(id, text, state, onDragStart, onDeleteTask, onImageAdd ) {
    const [image, setImage] = useState(null);
    const editorRef = useRef();

    const handleDragStart = (e) => {
        onDragStart(e, text);
    };

    const handleDelete = () => {
        onDeleteTask(id);
    };
    
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
            onImageAdd(text, state, base64);
        }
    };
    return {
        handleDragStart,
        handleDelete,
        handleImageUpload,
        handleSaveImage,
        image, 
        setImage,
        editorRef,
    };
    
};

