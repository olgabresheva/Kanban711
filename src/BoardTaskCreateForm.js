import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function BoardTaskCreateForm() {

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newTaskInput, setNewTaskInput] = useState('');

    const onCreateTask = () => {
        setShowCreateForm(true);
    }

    const cancelCreateTask = () => {
        setShowCreateForm(false);
        setNewTaskInput('');
    }


    return (
        <div className="BoardTaskCreateForm">

            {!showCreateForm && <button className="btn btn-info btn-sm" onClick={onCreateTask}>Create Task</button>}
            <p/>

            {showCreateForm ?
                <form>
                    <div className="form-group">
                        <input className="form-control" id="exampleInputTask" placeholder="your task description"/>
                    </div>
                    <select className="custom-select">
                        <option defaultValue="Select Priority" value>Select Task Priority</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                    <p/>
                    <button type="submit" className="btn btn-info btn-sm">Submit</button>
                    <button type="submit" className="btn btn-secondary btn-sm" onClick={cancelCreateTask}>Cancel
                    </button>
                </form>
                : null
            }

        </div>
    );
}

export default BoardTaskCreateForm;
