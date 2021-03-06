import React from 'react';
import './App.css';
import BoardTasksItem from "./BoardTasksItem";

function BoardTasksList(props) {
    return (
        <div className="BoardTasksList">
            {props.tasks.filter(el => el.state === props.state).map(el => <li key={el.id}>
                <BoardTasksItem item={el}
                                onTaskDelete={props.onTaskDelete}
                                onTaskEditSave={props.onTaskEditSave}
                                onPriorityChange={props.onPriorityChange}
                                onTaskMoveLeft={props.onTaskMoveLeft}
                                onTaskStateChange={props.onTaskStateChange}/>
            </li>)}
        </div>
    );
}

export default BoardTasksList;
