import { useState } from "react";
import { TaskLoadService } from "../services/TaskLoadService";

const TaskAdminService = () => {
    const [tasks, setTasks] = useState([]);

    const handleDragStart = (e, description) => {
        e.dataTransfer.setData("text/plain", description);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, state) => {
        e.preventDefault();
        const draggedText = e.dataTransfer.getData("text/plain");

        const updatedTasks = tasks.map((task) =>
            task.description === draggedText ? { ...task, state } : task
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
            description: newTaskTxt,
            state: "todo",
        };
        setTasks([...tasks, newTask]);
    }
    const fetchTaskData = async () => {
        try {
            const data = await TaskLoadService(20);
            console.log(data.task);
            const taskList = data.task;
            setTasks(taskList);
        } catch (error){
            console.error('Error al obtener los datos de las tareas: ', error.message);
        }
    };

    return { 
        tasks,
        setTasks,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDeleteTask,
        handleAddTask,
        fetchTaskData,
    };

}

export default TaskAdminService;
