import React from 'react';

function Task({ task, index, toggleTask, removeTask }) {
    const completedClass = task.isComplete ? 'completed' : '';

    return (
        <div className={`task-container ${completedClass}`} onClick={() => toggleTask(index)}>
            <h3 className="task-text">{task.text}</h3>
            <div className="button-container">
            <button className="remove-button" onClick={(e) => { e.stopPropagation(); removeTask(index); }}>Remove</button>
            <button className="complete-button" onClick={(e) => { e.stopPropagation(); toggleTask(index); }}>Completed</button>
            </div>
        </div>
    );
}

export default Task;