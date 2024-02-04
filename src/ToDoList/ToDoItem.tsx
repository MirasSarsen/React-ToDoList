import React from 'react';

function Item({ task, onRemove }) {
    return (
        <li>
            {task.text}
            <button onClick={() => onRemove(task.id)}>Удалить задачу</button>
        </li>
    );
}

export default Item;
