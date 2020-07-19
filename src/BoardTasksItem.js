import React, {useState} from 'react';
import './App.css';

function BoardTasksItem(props) {
    const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>);

    const editBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
        <path fillRule="evenodd"
              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
    </svg>);

    const priorityUp = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>);

    const priorityDown = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>);

    const leftBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
    </svg>);

    const rightBtn = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
        </svg>);

    const [editMode, setEditMode] = useState(false);
    const [taskEditInput, setTaskEditInput] = useState(props.item.name);
    const [priorityHighBtnDisabled, setPriorityHighBtnDisabled] = useState(false);
    const [priorityLowBtnDisabled, setPriorityLowBtnDisabled] = useState(false);

    const onTaskEdit = () => {
        setEditMode(true);
    }

    const onTaskEditSave = () => {
        props.onTaskEditSave(taskEditInput, props.item.id);
        setEditMode(false);
    }

    const onTaskEditCancel = () => {
        setEditMode(false);
        setTaskEditInput(props.item.name);
    }

    const onIncreasePriority = () => {
        props.onPriorityChange({id: props.item.id, direction: 'up'});
        (props.item.priority === 'High') && setPriorityHighBtnDisabled(true);
        (props.item.priority !== 'Low') && setPriorityLowBtnDisabled(false);
    }

    const onDecreasePriority = () => {
        props.onPriorityChange({id: props.item.id, direction: 'down'});
        (props.item.priority !== 'High') && setPriorityHighBtnDisabled(false);
        (props.item.priority === 'Low') && setPriorityLowBtnDisabled(true);
    }

    const onTaskMoveLeft = () => {
        props.onTaskStateChange({id: props.item.id, direction: 'left'});
    }

    const onTaskMoveRight = () => {
        props.onTaskStateChange({id: props.item.id, direction: 'right'});
    }

    return (
        <div className="BoardTasksItem">
            <div className="card shadow-sm">
                <div className="card-header rounded-top">
                    <button disabled={priorityHighBtnDisabled} onClick={onIncreasePriority}>{priorityUp}</button>
                    <button disabled={priorityLowBtnDisabled} onClick={onDecreasePriority}>{priorityDown}</button>
                    <span className="inline-block mr-auto p-2">{props.item.priority}</span>
                    <span className="p-2" onClick={onTaskEdit}>{editBtn}</span>
                    <span className="p-2" onClick={() => props.onTaskDelete(props.item.id)}>{deleteBtn}</span>
                </div>
                <div className="card-body">
                    {editMode
                        ? <>
                            <input type="text" value={taskEditInput}
                                   onChange={e => setTaskEditInput(e.target.value)}/><br/>
                            <button type="button" className="btn btn-outline-success btn-sm"
                                    onClick={onTaskEditSave}>Save
                            </button>
                            <button type="button" className="btn btn-outline-dark btn-sm"
                                    onClick={onTaskEditCancel}>Cancel
                            </button>
                        </>
                        : <span className="card-text"> {props.item.name}</span>
                    }
                </div>
                <div className="card-footer bg-transparent border-top-0">
                    {(props.item.state !== 'To Do')
                        ? <button onClick={onTaskMoveLeft}>{leftBtn}</button>
                        : null}
                    {(props.item.state !== 'Done')
                        ? <button onClick={onTaskMoveRight}>{rightBtn}</button>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default BoardTasksItem;
