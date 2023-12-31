import { useState } from "react";
import { TaskAddService, TaskLoadService } from "../services/TaskLoadService";
import { TaskDeleteService } from '../services/TaskLoadService';
import { TaskUpdateService } from "../services/TaskLoadService";
import { TaskService } from '../services/TaskLoadService';

const TaskAdminService = (token, customer) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");
    

    const handleDragStart = (e, description) => {
        e.dataTransfer.setData("text/plain", description);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, state, user, token) => {
        e.preventDefault();
        const draggedText = e.dataTransfer.getData("text/plain");

        const updatedTasks = tasks.map((task) =>
            task.description === draggedText ? { ...task, state } : task
        );

        TaskUpdateService(e.dataTransfer.getData("text/plain"), state, "", true, user, token);

        setTasks(updatedTasks);

    };

    const handleDeleteTask = (id) => {
        const updatedTask = tasks.filter(task => task.id !== id);
        TaskDeleteService(customer.id, id, token);
        setTasks(updatedTask);
    };

    const handleAddTask = (newTaskTxt, user, token) => {
        TaskAddService(newTaskTxt, "todo", "", true, user, token);
        const newTask = {
            id: tasks.length+1,
            description: newTaskTxt,
            state: "todo",
        };
        setTasks([...tasks, newTask]);
    }
    const fetchTaskData = async (customer_id, token) => {
        try {
            const data = await TaskLoadService(customer_id, token);
            const taskList = data.task;
            setTasks(taskList);
        } catch (error){
            console.error('Error al obtener los datos de las tareas: ', error.message);
            setError(true);
            setErrorDescription(error.message);
        }
    };
    const handleImageAdd = (description, state, image_url) => {
        TaskUpdateService(description, state, image_url, true, customer.id, token);
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
        errorDescription,
        error,
        handleImageAdd,
    };

}

export default TaskAdminService;
