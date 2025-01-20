import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-200');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setBackgroundColor('bg-gradient-to-b from-gray-300 to-gray-500');
      } else {
        setBackgroundColor('bg-gray-200');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    setErrors({ ...errors, [name]: '' });
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = { email: '', username: '', password: '' };

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Username validation
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
      valid = false;
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up_user`, {
        user_name: formData.username,
        plain_text_password: formData.password,
        email: formData.email,
      });

      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      setErrors({ ...errors, form: error.response?.data?.detail || 'An error occurred.' });
    }
  };

  const handleBarsIcon = () => {
    alert('Bars icon clicked!');
  };

  return (
    <div className={`min-h-screen ${backgroundColor} relative`}>
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-gray-300 to-gray-500 rounded-3xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="w-[50%] p-3 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors"
              onClick={handleSignUp}
            >
              SIGN UP
            </button>
          </div>
          <div className="text-center">
            <span className="text-white italic font-bold text-xl">Already have an account?!</span>
            <span
              className="text-blue-600 italic font-bold text-xl cursor-pointer hover:text-blue-700 transition-colors ml-2"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-5 left-5 w-12 h-12 cursor-pointer" onClick={() => navigate('/')}>
        <img
          src={`${process.env.PUBLIC_URL}/home-icon.png`}
          alt="Home"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-5 right-5 w-8 h-8 cursor-pointer" onClick={handleBarsIcon}>
        <img
          src={`${process.env.PUBLIC_URL}/bars-icon.png`}
          alt="Bars"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
