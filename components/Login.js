import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !email.trim()) return;
    const userData = { name, age, email };
    localStorage.setItem('user', JSON.stringify(userData));
    onLogin(userData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to Task Tracker</h2>
        <p className="subtitle">Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
