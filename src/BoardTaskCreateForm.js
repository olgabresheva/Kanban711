import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function BoardTaskCreateForm(props) {

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newTaskInput, setNewTaskInput] = useState('');
    const [priority, setPriority] = useState('Select Task Priority');

    const onOpenCreateTaskForm = () => {
        setShowCreateForm(true);
    }

    const cancelCreateTask = () => {
        setShowCreateForm(false);
        setNewTaskInput('');
    }

    const onPrioritySelect = (e) => {
        // setPriority({value : e.target.value});
        setPriority(e.target.value);
    }

    const onCreateTask = (e) => {
        props.onTaskCreate(newTaskInput, priority);
        e.preventDefault();
    }


    return (
        <div className="BoardTaskCreateForm">

            {!showCreateForm && <button className="btn btn-info btn-sm" onClick={onOpenCreateTaskForm}>Create Task</button>}
            <p/>

            {showCreateForm ?
                <form>
                    <div className="form-group">
                        <input className="form-control" id="exampleInputTask" placeholder="your task description"
                        onChange={e => setNewTaskInput(e.target.value)}/>
                    </div>
                    <select className="custom-select">
                        <option value="0" onChange={onPrioritySelect}>Select Task Priority</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                    <p/>
                    <button type="submit" className="btn btn-info btn-sm" onClick={onCreateTask} >Submit</button>
                    <button type="submit" className="btn btn-secondary btn-sm" onClick={cancelCreateTask}>Cancel
                    </button>
                </form>
                : null
            }

        </div>
    );
}

export default BoardTaskCreateForm;
