import React, { useState } from 'react';
import Item from './ToDoItem.tsx';
import Form from './ToDoForm.tsx';

interface Task {
        id: number;
        text: string;
}

    function ToDoList() {
        const [tasks, setTasks] = useState<Task[]>([
            { id: 1, text: 'Выучить Redux' },
            { id: 2, text: 'Выучить TypeScript' },
            { id: 3, text: 'Выучить Реакт роутеры' },
        ]);

        function removeTask(taskId: number) {
            const updateTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updateTasks);
        };

        function addTask(newTask: string) {
            setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
        };
  return (
    <div>
          <ul>
              {tasks.map(task => (
                  <Item key={task.id} task={task} onRemove={removeTask} />
              ))}
          </ul>
          <Form onAdd={addTask} />
    </div>
  )
}

export default ToDoList;
