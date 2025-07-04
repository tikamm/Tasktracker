import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet.</p>;
  }

  return (
    <div>
      <h2 className="task-heading">Your Tasks</h2>
      <div className="task-grid">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.completed ? 'completed' : 'pending'}`}
          >
            <h3 className="task-title">
              {task.title}
            </h3>
            {task.description && <p>{task.description}</p>}
            <p className="task-meta">
              Created: {new Date(task.createdAt).toLocaleString()}
            </p>
            <p className="task-status">
              Status: {task.completed ? 'Completed ✅' : 'Pending ⏳'}
            </p>
            <div className="task-actions">
              <button onClick={() => onToggle(task.id)}>
                Toggle Status
              </button>
              <button onClick={() => onDelete(task.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
