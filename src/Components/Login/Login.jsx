import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='image'>
      <div className='login-container'>
        <div className='login-content'>
          <h1>Login</h1>
          <p>Please enter your credentials to log in.</p>
          <form>
            <div className='login-form-group'>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' placeholder='Your Username' required />
            </div>
            <div className='login-form-group'>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' placeholder='Your Password' required />
            </div>
            <button type='submit' className='login-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

