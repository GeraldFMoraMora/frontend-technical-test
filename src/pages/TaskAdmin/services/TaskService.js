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
            onImageAdd(text, state, base64);
        }
    };

    const convertImage64toBlobUrl = (image64) => {
        if (image64) {
            const byteCharacters = atob(image64.split(',')[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/png' });
      
            const blobUrl = URL.createObjectURL(blob);
            
            setImage(blobUrl);
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
        convertImage64toBlobUrl,
    };
    
};

