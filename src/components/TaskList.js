import React, { useState } from "react";
import Form from "./Form";
import '../styles/TaskList.css';
import Task from "./Task";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        console.log(task);
        if (task.text.trim()){
            task.text = task.text.trim();

            const updatedTask = [task, ...tasks];
            setTasks(updatedTask);
        }
    }

    const deleteTask=id=>{
        const updatedTask = tasks.filter(task => task.id !== id);
        setTasks(updatedTask);
    }

    return (
        <>
            <Form onSubmit={addTask} />
            <div className="list-task-div">
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            iscomplete={task.iscomplete}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>

        </>
    );
}
export default TaskList;