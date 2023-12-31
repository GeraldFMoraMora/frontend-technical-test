import React from "react";
import appLogo from '../../images/tasklogo.jpg';
import TaskManager from './components/TaskManager';
import './styles/TaskAdmin.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from '../Profile/Profile';

function TaskAdmin({customer, token}) {
    return (
        <>
        <div className="taskadmin-principal-div">
            <div className='component-div'>
                
                
            </div>
        </div>
        <Tabs
            defaultActiveKey='task'
            id="uncontrolled-tab"
            className="mb-3 custom-tabs"
        >
            <Tab eventKey="task" title="Tasks" className="custom-tab">
                <TaskManager customer={customer} token={ token }/>
            </Tab>
            <Tab eventKey="profile" title="Profile" className="custom-tab">
                <Profile customer={customer} token={ token }/>
            </Tab>

        </Tabs>
        </>
    );
}

export default TaskAdmin;