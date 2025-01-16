import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-200');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setBackgroundColor('bg-gradient-to-b from-gray-300 to-gray-500');
      } else {
        setBackgroundColor('bg-gray-200');
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct background color
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => {
    alert('Login button clicked!');
  };

  const handleForgotPassword = () => {
    alert('Forgot password clicked!');
  };

  const handleBarsIcon = () => {
    alert('Bars icon clicked!');
  };

  return (
    <div className={`min-h-screen ${backgroundColor} relative`}>
      {/* مستطیل طوسی رنگ (برای صفحه‌های بزرگ‌تر از 450 پیکسل) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-gray-300 to-gray-500 rounded-3xl">
        {/* محتوای داخل مستطیل طوسی */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
          {/* فیلد username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="username"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
            />
          </div>

          {/* فیلد password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
            />
          </div>

          {/* دکمه LOG IN */}
          <div className="flex justify-center mb-4">
            <button
              className="w-[50%] p-3 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors"
              onClick={handleLogin}
            >
              LOG IN
            </button>
          </div>

          {/* متن Forgot password? */}
          <div className="text-center mb-4">
            {/* تغییر رنگ آبی به blue-600 */}
            <span
              className="text-blue-600 italic font-bold text-xl cursor-pointer hover:text-blue-700 transition-colors"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </span>
          </div>

          {/* متن No account? Create one */}
          <div className="text-center">
            <span
              className="text-white italic font-bold text-xl"
            >
              No account?
            </span>
            {/* تغییر رنگ آبی به blue-600 */}
            <span
              className="text-blue-600 italic font-bold text-xl cursor-pointer hover:text-blue-700 transition-colors ml-2"
              onClick={() => navigate('/signup')}
            >
              Create one
            </span>
          </div>
        </div>
      </div>

      {/* محتوای صفحه برای صفحه‌های کوچک‌تر از 450 پیکسل */}
      <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
        {/* فیلد username */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="username"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
          />
        </div>

        {/* فیلد password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            style={{ fontFamily: 'Inspiration', fontSize: '20px', color: '#999999' }}
          />
        </div>

        {/* دکمه LOG IN */}
        <div className="flex justify-center mb-4">
          <button
            className="w-[50%] p-3 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors"
            onClick={handleLogin}
          >
            LOG IN
          </button>
        </div>

        {/* متن Forgot password? */}
        <div className="text-center mb-4">
          {/* تغییر رنگ آبی به blue-600 */}
          <span
            className="text-blue-600 italic font-bold text-xl cursor-pointer hover:text-blue-700 transition-colors"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </span>
        </div>

        {/* متن No account? Create one */}
        <div className="text-center">
          <span
            className="text-gray-700 italic font-bold text-xl"
          >
            No account?
          </span>
          {/* تغییر رنگ آبی به blue-600 */}
          <span
            className="text-blue-600 italic font-bold text-xl cursor-pointer hover:text-blue-700 transition-colors ml-2"
            onClick={() => navigate('/signup')}
          >
            Create one
          </span>
        </div>
      </div>

      {/* آیکون home */}
      <div
        className="absolute top-5 left-5 w-12 h-12 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={`${process.env.PUBLIC_URL}/home-icon.png`}
          alt="Home"
          className="w-full h-full"
        />
      </div>

      {/* آیکون bars */}
      <div
        className="absolute top-5 right-5 w-8 h-8 cursor-pointer"
        onClick={handleBarsIcon}
      >
        <img
          src={`${process.env.PUBLIC_URL}/bars-icon.png`}
          alt="Bars"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default LoginPage;