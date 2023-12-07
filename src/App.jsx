import React, { useState } from 'react';
import Task from './Task';

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTasks([...tasks, { text: input, isComplete: false }]);
            setInput('');
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isComplete = !newTasks[index].isComplete;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <form onSubmit={addTask}>
                <input className="input-field" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="add-task-button" type="submit">Add Task</button>
            </form>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task key={index} index={index} task={task} toggleTask={toggleTask} removeTask={removeTask} />
                ))}
            </div>
        </div>
    );
}

export default App;