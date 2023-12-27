import React from "react";
import '../styles/TaskAdmin.css'
import Form from "./Form";
import Task from "./Task";

function TaskAdmin () {
    return (
        <div className="admin-task-div">
            <div>
                <h2>Tasks</h2>
            </div>
            <Form/>
            <div className="admin-task-principal">
                <div className="task-todo-div">
                    <h2 className="admin-task-titles">To Do</h2>
                    <div className="task-list-div">
                    <Task text="task 1"/>
                    <Task text="task 1"/>

                    </div>
                </div>
                <div className="task-working-div">
                    <h2 className="admin-task-titles">Working</h2>
                    <div className="task-list-div">
                    <Task text="task 1"/>
                    <Task text="task 1"/>

                    </div>
                </div>
                <div className="task-finish-div">
                    <h2 className="admin-task-titles">Done</h2>
                    <div className="task-list-div">
                        <Task text="task 1"/>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default TaskAdmin;