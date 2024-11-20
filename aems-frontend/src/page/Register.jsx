import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (em) => {
    return em.includes('@');
  };

  const handleEmailChange = (e) => {
    const em = e.target.value;
    setEmail(em);
    if (!validateEmail(em)) {
      setEmailError('Email must include "@" symbol.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pwd);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (!validatePassword(pwd)) {
      setPasswordError('Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      // Handle invalid inputs
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        // Handle server errors
        const errorData = await response.json();
        console.error('Registration failed:', errorData.message);
      }
    } catch (error) {
      // Handle network errors
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-md shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Create an account</h1>
        <p className="text-xl text-gray-400 mb-6">
          Let us simplify your workflow
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-left mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-left mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-left mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div>
            <label className="block text-left mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-sm">
          <p>
            Already signed up?{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Sign in
            </a>
          </p>
        </div>
        <div className="mt-4 text-sm">
          <p>
            Are you an user?{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
