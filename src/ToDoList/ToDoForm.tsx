import React, { useState } from 'react';

function Form({ onAdd }) {
    const [newTask, setNewTask] = useState('');

    const dsAddTask = () => {
        onAdd(newTask);
        setNewTask('');
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={dsAddTask}>Добавить задачу</button>
        </div>
    );
}

export default Form;
