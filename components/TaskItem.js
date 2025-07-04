import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description || '');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    onEdit(task.id, editTitle, editDesc);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
          />
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)} type="button">Cancel</button>
        </form>
      ) : (
        <>
          <h3>{task.title} {task.completed && '✅'}</h3>
          {task.description && <p>{task.description}</p>}
          <p className="timestamp">Created: {new Date(task.createdAt).toLocaleString()}</p>
          <div className="buttons">
            <button onClick={() => onToggle(task.id)}>
              Mark as {task.completed ? 'Pending' : 'Completed'}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
