import React, { useState } from 'react';


const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required!');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      alert('Sign-in successful!');
    } else {
      setError('Invalid credentials, please try again.');
    }
    return
  };

  return (
    <div>

    <div id="sign" className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-btn">Sign In</button>
      </form>
    </div>
    <main>
      <div className='none'></div>

    </main>
  </div>
  );
};

export default SignIn;
