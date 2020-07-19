import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BoardTaskCreateForm from "./BoardTaskCreateForm";
import BoardTasksList from "./BoardTasksList";
import {uuid} from "uuidv4";

const initialList = [
    {id: uuid(), name: 'Task 1', priority: 'Low', state: 'To Do'},
    {id: uuid(), name: 'Task 2', priority: 'Medium', state: 'In Progress'},
    {id: uuid(), name: 'Task 3', priority: 'High', state: 'In Review'},
    {id: uuid(), name: 'Task 4', priority: 'Low', state: 'Done'},
]

function App() {

    const [tasks, setTasks] = useState(initialList);

    const onTaskDelete = (id) => {
        const updatedTaskList = tasks.filter(el => el.id !== id);
        setTasks(updatedTaskList);
    }

    const onTaskCreate = (taskName, priority) => {
        const updatedTaskList = [...tasks];
        updatedTaskList.push({id: uuid(), name: taskName, priority: priority, state: 'To Do'});
        setTasks(updatedTaskList);
    }

    const onTaskEditSave = (name, id) => {
        const updatedTaskList = tasks.map(el => {
            if (el.id === id) return ({...el, name: name})
            else return el
        })
        setTasks(updatedTaskList);
    }

    const priorities = ['Low', 'Medium', 'High'];

    const onPriorityChange = ({id, direction}) => {
        const updatedTaskList = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'up') {
                    el.priority = priorities[priorities.indexOf(el.priority) + 1]
                }
                if (direction === 'down') {
                    el.priority = priorities[priorities.indexOf(el.priority) - 1]
                }
                return el
            } else return el
        });
        setTasks(updatedTaskList);
    }

    const states = ['To Do', 'In Progress', 'In Review', 'Done'];

    const onTaskStateChange = ({id, direction}) => {
        const updatedTaskList = tasks.map(el => {
            if(el.id === id){
                if(direction === 'left'){
                    el.state = states[states.indexOf(el.state) - 1];
                }
                if(direction === 'right'){
                    el.state = states[states.indexOf(el.state) + 1];
                } return el
            } else return el;
        });
        setTasks(updatedTaskList);
    }

    return (
        <div className="container">
            <h3>Kanban Board</h3>
            <p/>
            <BoardTaskCreateForm onTaskCreate={onTaskCreate}/>
            <hr/>
            <div className="row">
                <div className="col-sm">
                    <nav className="navbar navbar-light bg-light">
                        <span><strong>To Do</strong></span>
                    </nav>
                    <p/>
                    <BoardTasksList
                        tasks={tasks} state='To Do'
                        onTaskDelete={onTaskDelete}
                        onTaskEditSave={onTaskEditSave}
                        onPriorityChange={onPriorityChange}
                        onTaskStateChange={onTaskStateChange}
                    />
                </div>
                <div className="col-sm">
                    <nav className="navbar navbar-light bg-light">
                        <span><strong>In Progress</strong></span>
                    </nav>
                    <p/>
                    <BoardTasksList tasks={tasks} state='In Progress'
                                    onTaskDelete={onTaskDelete}
                                    onTaskEditSave={onTaskEditSave}
                                    onPriorityChange={onPriorityChange}
                                    onTaskStateChange={onTaskStateChange}
                    />
                </div>
                <div className="col-sm">
                    <nav className="navbar navbar-light bg-light">
                        <span><strong>In Review</strong></span>
                    </nav>
                    <p/>
                    <BoardTasksList tasks={tasks} state='In Review'
                                    onTaskDelete={onTaskDelete}
                                    onTaskEditSave={onTaskEditSave}
                                    onPriorityChange={onPriorityChange}
                                    onTaskStateChange={onTaskStateChange}
                    />
                </div>
                <div className="col-sm">
                    <nav className="navbar navbar-light bg-light">
                        <span><strong>Done</strong></span>
                    </nav>
                    <p/>
                    <BoardTasksList tasks={tasks} state='Done'
                                    onTaskDelete={onTaskDelete}
                                    onTaskEditSave={onTaskEditSave}
                                    onPriorityChange={onPriorityChange}
                                    onTaskStateChange={onTaskStateChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
