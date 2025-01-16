import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#2C2C5D]">
      {/* Navbar */}
      <div
        className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-8 z-50"
        style={{
          background: isMobile
            ? 'linear-gradient(90deg, #2F1F74 5.1%, #140D31 27.6%, #140E30 53.1%, #140D31 69.6%, #2F1F74 93.5%)'
            : 'linear-gradient(90deg, #140D31 32.5%, rgba(29, 23, 57, 0.96) 51%, #2C2C5D 90%)',
        }}
      >
        {/* Logo */}
        <div
          className={`${isMobile ? 'w-64 mx-auto' : 'w-48'} h-24 bg-cover bg-center`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo.png)` }}
        />

        {/* Search Bar */}
        {!isMobile ? (
          <div className="w-1/3 h-12 bg-gray-200 rounded-full flex items-center px-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none"
            />
            <button
              className="w-8 h-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/search-icon.png)` }}
            />
          </div>
        ) : (
          <div className="absolute top-24 left-0 w-full h-12 bg-gray-200 flex items-center px-4 rounded-b-[30px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none"
            />
            <button
              className="w-8 h-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/search-icon.png)` }}
            />
          </div>
        )}

        {/* Sign Up & Sign In Buttons */}
        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-4'}`}>
          <button
            className="w-24 h-10 bg-white text-[#237ED7] font-bold rounded-lg hover:bg-[#237ED7] hover:text-white transition-colors"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          <button
            className="w-24 h-10 bg-white text-[#237ED7] font-bold rounded-lg hover:bg-[#237ED7] hover:text-white transition-colors"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        {/*  */}
      </div>

      {/* Footer */}
      <div className={`fixed bottom-0 left-0 w-full h-16 bg-[#2C2C5D] flex items-center justify-center ${isMobile ? 'gap-8' : 'gap-32'}`}>
        <button className="text-white text-base font-iceberg hover:text-[#237ED7] transition-colors">
          HELP CENTER
        </button>
        <button className="text-white text-base font-iceberg hover:text-[#237ED7] transition-colors">
          ABOUT US
        </button>
        <button className="text-white text-base font-iceberg hover:text-[#237ED7] transition-colors">
          WAYS TO WATCH
        </button>
        <button className="text-white text-base font-iceberg hover:text-[#237ED7] transition-colors">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Main;