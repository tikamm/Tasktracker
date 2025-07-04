import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleAddTask = (task) => {
    const updated = [...tasks, task];
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const handleToggle = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const filteredTasks =
    filter === 'All'
      ? tasks
      : tasks.filter((t) => (filter === 'Completed' ? t.completed : !t.completed));

  return (
    <div className="app-container">
      {user ? (
        <>
          <ThemeToggle onLogout={handleLogout} />
          <h1 className="welcome-text">WELCOME TO TASK TRACKER</h1>
          <TaskForm onAdd={handleAddTask} />
          <TaskFilter
            filter={filter}
            setFilter={setFilter}
            taskCounts={{
              All: tasks.length,
              Completed: tasks.filter((t) => t.completed).length,
              Pending: tasks.filter((t) => !t.completed).length,
            }}
          />
          <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
