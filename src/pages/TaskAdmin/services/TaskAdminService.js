import { useState } from "react";

const TaskAdminService = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Task 1", status: "todo" },
        { id: 2, text: "Task 2", status: "todo" },
        { id: 3, text: "Task 3", status: "working" },
        { id: 4, text: "Task 4", status: "working" },
        { id: 5, text: "Task 5", status: "working" },
        { id: 6, text: "Task 6", status: "working" },
      ]);

    const handleDragStart = (e, text) => {
        e.dataTransfer.setData("text/plain", text);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, status) => {
        e.preventDefault();
        const draggedText = e.dataTransfer.getData("text/plain");

        const updatedTasks = tasks.map((task) =>
            task.text === draggedText ? { ...task, status } : task
        );

        setTasks(updatedTasks);

    };

    const handleDeleteTask = (id) => {
        const updatedTask = tasks.filter(task => task.id !== id);
        setTasks(updatedTask);
    };

    const handleAddTask = (newTaskTxt) => {
        const newTask = {
            id: tasks.length+1,
            text: newTaskTxt,
            status: "todo",
        };
        setTasks([...tasks, newTask]);
    }

    return { 
        tasks,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDeleteTask,
        handleAddTask,
    };

}

export default TaskAdminService;
