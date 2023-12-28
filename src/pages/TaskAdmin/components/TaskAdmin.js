import React from "react";
import { useState } from "react";
import '../styles/TaskAdmin.css'
import Form from "./Form";
import Task from "./Task";
import TaskAdminService from "../services/TaskAdminService";
import { FormProfile } from '../../Profile/components/FormProfile';

function TaskAdmin () {

    const {
        tasks,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDeleteTask,
        handleAddTask,
      } = TaskAdminService();
      
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