import React from 'react';
import './ToDoItem.scss';

function Item({ task, onRemove, onDone }) {
    return (
        <li>
            <span>{task.id}</span>
            <div style={{ textDecoration: task.underline ? 'line-through' : 'none' }}>
            {task.text}
            </div>
            <button onClick={() => onRemove(task.id)}>Удалить задачу</button>
            <button onClick={() => onDone(task.id)}>Сделал</button>
        </li>
    );
}

export default Item;
