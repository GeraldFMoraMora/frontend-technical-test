const TaskService = (id, text, onDragStart, onDeleteTask ) => {
    const handleDragStart = (e) => {
        onDragStart(e, text);
    };

    const handleDelete = () => {
        onDeleteTask(id);
    };
    return {
        handleDragStart,
        handleDelete,
    };

}

export default TaskService;