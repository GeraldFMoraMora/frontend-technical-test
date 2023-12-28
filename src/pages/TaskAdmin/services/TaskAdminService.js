import { useState } from "react";
import { TaskAddService, TaskLoadService } from "../services/TaskLoadService";
import { TaskDeleteService } from '../services/TaskLoadService';
import { TaskUpdateService } from "../services/TaskLoadService";
import { TaskService } from '../services/TaskLoadService';

const TaskAdminService = () => {
    const [tasks, setTasks] = useState([]);

    const handleDragStart = (e, description) => {
        e.dataTransfer.setData("text/plain", description);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, state, user) => {
        e.preventDefault();
        const draggedText = e.dataTransfer.getData("text/plain");

        const updatedTasks = tasks.map((task) =>
            task.description === draggedText ? { ...task, state } : task
        );

        TaskUpdateService(e.dataTransfer.getData("text/plain"), state, "", true, user);

        setTasks(updatedTasks);

    };

    const handleDeleteTask = (id) => {
        const updatedTask = tasks.filter(task => task.id !== id);
        TaskDeleteService(20, id);
        setTasks(updatedTask);
    };

    const handleAddTask = (newTaskTxt, user) => {
        TaskAddService(newTaskTxt, "todo", "", true, user);
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
