import React from "react";
import { useState } from "react";
import '../styles/TaskAdmin.css'
import Form from "./Form";
import Task from "./Task";

function TaskAdmin () {
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

    return (
        <div className="admin-task-div">
            <div>
                <h2>Tasks</h2>
            </div>
            <Form onAddTask={ handleAddTask }/>
            <div className="admin-task-principal">
                <div 
                    className="task-todo-div"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e)=> handleDrop(e, "todo")}
                >
                    <h2 className="admin-task-titles">To Do</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.status === "todo")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.text} 
                            onDragStart={handleDragStart}
                            onDeleteTask = { handleDeleteTask }
                        />
                    ))}

                    </div>
                </div>
                <div 
                    className="task-working-div"
                    onDragOver={(e)=> handleDragOver(e)}
                    onDrop={(e)=> handleDrop(e,"working")}
                >
                    <h2 className="admin-task-titles">Working</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.status === "working")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.text} 
                            onDragStart={handleDragStart}
                            onDeleteTask = {handleDeleteTask}
                        />
                    ))}

                    </div>
                </div>
                <div 
                    className="task-finish-div"
                    onDragOver={(e)=> handleDragOver(e)}
                    onDrop={(e)=> handleDrop(e,"done")}
                >
                    <h2 className="admin-task-titles">Done</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.status === "done")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.text} 
                            onDragStart={handleDragStart}
                            onDeleteTask = {handleDeleteTask}
                        />
                    ))}

                    </div>
                </div>

            </div>

        </div>
    );
}

export default TaskAdmin;