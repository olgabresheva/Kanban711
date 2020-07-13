import React from 'react';
import './App.css';

function BoardTasksItem(props) {
    return (
        <div className="BoardTasksItem">
            <div className="card">
                <div className="card-body">
                    <p className="card-text"> {props.item.name}</p>
                </div>
            </div>
        </div>
    );
}

export default BoardTasksItem;
