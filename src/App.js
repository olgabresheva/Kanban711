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
    const state = ['To Do', 'In Progress', 'In Review', 'Done'];

    return (
        <div className="App" className="container">
            <h3>Kanban Board</h3>
            <p/>
            <BoardTaskCreateForm/>
            <hr/>
            <div className="row">
                <div className="col-sm">
                    To Do
                    <BoardTasksList
                        tasks={tasks} state='To Do'/>
                </div>
                <div className="col-sm">
                    In Progress
                    <BoardTasksList tasks={tasks} state='In Progress'/>
                </div>
                <div className="col-sm">
                    In Review
                    <BoardTasksList tasks={tasks} state='In Review'/>
                </div>
                <div className="col-sm">
                    Done
                    <BoardTasksList tasks={tasks} state='Done'/>
                </div>
            </div>
        </div>
    );
}

export default App;
