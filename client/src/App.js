import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Send POST request to register endpoint with username and password
      await axios.post('http://localhost:5000/api/register', { username, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      console.error('Error message:', error.message);
      console.error('Error response data:', error.response?.data);
      console.error('Error stack trace:', error.stack);
    }
  };

  const handleLogin = async () => {
    try {
      // Send POST request to login endpoint with username and password
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const token = response.data.token;

      // Store token in local storage
      localStorage.setItem('token', token);

      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
      console.error('Error message:', error.message);
      console.error('Error response data:', error.response?.data);
      console.error('Error stack trace:', error.stack);
    }
  };

  return (
    <div>
      <h1>Register / Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
