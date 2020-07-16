import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function BoardTaskCreateForm(props) {

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newTaskInput, setNewTaskInput] = useState('');
    const [priority, setPriority] = useState('');

    const onOpenCreateTaskForm = () => {
        setShowCreateForm(true);
    }

    const cancelCreateTask = () => {
        setShowCreateForm(false);
        setNewTaskInput('');
    }

    const onPrioritySelect = (e) => {
        setPriority(e.target.value);
    }

    const onCreateTask = (e) => {
        props.onTaskCreate(newTaskInput, priority);
        e.preventDefault();
        setShowCreateForm(false);
        setNewTaskInput('');
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
                    <select className="custom-select" onChange={onPrioritySelect}>
                        <option defaultValue="Select Priority">Select Task Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
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
