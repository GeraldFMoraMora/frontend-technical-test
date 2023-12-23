import React, { useState } from "react";
import '../styles/TaskList.css';
import Task from "./Task";
import Form from "./Form";

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

    const finishTask = id => {
        const updatedTask = tasks.map(task => {
            if(task.id === id) {
                task.iscomplete = !task.iscomplete;
            }
            return task;
        });
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
                            finishTask={finishTask}
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