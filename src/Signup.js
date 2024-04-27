import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { v4 as uuidv4 } from 'uuid';
import "./signup.css";

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' ,ConfirmPassword: ''});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Redirect if user is already signed in
  useEffect(() => {
    if (user && user.accessToken) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    if(formData.password !== formData.ConfirmPassword){
        setError('Password Should Be Same');
        return;
    }

    const accessToken = uuidv4().replace(/-/g, '').slice(0, 16); // Random 16-byte string
    setUser({ ...formData, accessToken });

    setSuccess('Signup successful!');
    setError('');

    setTimeout(() => {
      navigate('/profile');
    }, 5000);
  };

  return (
    <div className='sign-up'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input className='input' placeholder='Full Name' type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <input className='input' placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <input className='input' placeholder='Password' type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <input className='input' placeholder='Confirm Password' type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Signup</button>
      </form>
   
    </div>
  );
};

export default Signup;
