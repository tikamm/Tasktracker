import React from 'react';
import './TaskFilter.css';
import './TaskFilter.css';

function TaskFilter({ filter, setFilter, taskCounts }) {
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div className="task-filter">
      {filters.map((type) => (
        <button
          key={type}
          className={`filter-btn ${filter === type ? 'active' : ''}`}
          onClick={() => setFilter(type)}
        >
          {type} ({taskCounts[type] || 0})
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
