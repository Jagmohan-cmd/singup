import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to signup if user is not authenticated
  useEffect(() => {
    if (!user || !user.accessToken) {
      navigate('/signup');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate('/signup'); // Redirect to signup
  };

  return (
    <div style={{marginLeft: 50}}>
      <h1>Profile</h1>
      {user ? (
        <>
          <h1>Username: {user.username}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Password: {user.password}</h1>
          <button style={{marginTop: 30 , paddingTop: 5 , paddingBottom: 5 , paddingRight: 50 , paddingLeft: 50}} onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Unauthorized access. Please signup first.</p>
      )}
    </div>
  );
};

export default Profile;
