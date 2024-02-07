import React, { useState } from 'react';
import Item from './ToDoItem.tsx';
import Form from './ToDoForm.tsx';
import './ToDo.scss';

interface Task {
  id: number;
  text: string;
  underline?: boolean; 
}

function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Выучить Redux' },
    { id: 2, text: 'Выучить TypeScript' },
    { id: 3, text: 'Выучить Реакт роутеры' },
  ].map(task => ({ ...task, underline: false })));

function removeTask(taskId: number) {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
}

/* ... указывает, что мы хотим взять каждый элемент из массива tasks.
tasks - это массив, который мы разворачиваем.
*/
  function addTask(newTask: string) {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask}]);
  }

  function toggleUnderline(taskId: number) {
    setTasks(tasks =>
      tasks.map(task => 
        task.id === taskId ? {...task, underline: !task.underline || false} : task
        ))
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onRemove={removeTask} onDone={toggleUnderline}/>
        ))}
      </ul>
      <Form onAdd={addTask} />
    </div>
  );
}

export default ToDoList;
