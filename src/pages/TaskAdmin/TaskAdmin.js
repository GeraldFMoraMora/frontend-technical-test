import React from "react";
import appLogo from '../../images/tasklogo.jpg';
import TaskManager from './components/TaskManager';
import './styles/TaskManager.css';

function TaskAdmin() {
    return (
        <div className="taskadmin-principal-div">
            <div className='component-div'>
                <TaskManager/>
            </div>
        </div>
    );
}

export default TaskAdmin;