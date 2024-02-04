// ToDoForm.js
import React, { useState } from 'react';

function Form({ onAdd }) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
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
            <button onClick={handleAddTask}>Добавить задачу</button>
        </div>
    );
}

export default Form;
