import React from "react";
import { useEffect } from "react";
import '../styles/TaskManager.css'
import Form from "./Form";
import Task from "./Task";
import TaskAdminService from "../services/TaskAdminService";

function TaskManager() {

    const {
        tasks,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDeleteTask,
        handleAddTask,
        fetchTaskData,
      } = TaskAdminService();

    useEffect( () => {
        fetchTaskData();
    },[]
    );
      
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
                    onDrop={(e)=> handleDrop(e, "todo", 49)}
                >
                    <h2 className="admin-task-titles">To Do</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.state === "todo")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.description} 
                            onDragStart={handleDragStart}
                            onDeleteTask = { handleDeleteTask }
                        />
                    ))}

                    </div>
                </div>
                <div 
                    className="task-working-div"
                    onDragOver={(e)=> handleDragOver(e)}
                    onDrop={(e)=> handleDrop(e,"working", 49)}
                >
                    <h2 className="admin-task-titles">Working</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.state === "working")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.description} 
                            onDragStart={handleDragStart}
                            onDeleteTask = { handleDeleteTask }
                        />
                    ))}

                    </div>
                </div>
                <div 
                    className="task-finish-div"
                    onDragOver={(e)=> handleDragOver(e)}
                    onDrop={(e)=> handleDrop(e,"done", 49)}
                >
                    <h2 className="admin-task-titles">Done</h2>
                    <div className="task-list-div">
                    {tasks
                    .filter((task) => task.state === "done")
                    .map((task) => (
                        <Task 
                            key={task.id} 
                            id={task.id}
                            text={task.description} 
                            onDragStart={handleDragStart}
                            onDeleteTask = { handleDeleteTask }
                        />
                    ))}

                    </div>
                </div>

            </div>

        </div>
    );
}

export default TaskManager;