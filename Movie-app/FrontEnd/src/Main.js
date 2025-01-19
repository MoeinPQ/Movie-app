import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      setIsSmallScreen(window.innerWidth < 700);
      setIsMediumScreen(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const MainContent = () => {
    const movieCovers = [
      { id: 1, image: 'movie.jpg' },
      { id: 2, image: 'movie.jpg' },
      { id: 3, image: 'movie.jpg' },
      { id: 4, image: 'movie.jpg' },
    ];

    const genres = [
      { id: 1, title: 'Film', icon: `${process.env.PUBLIC_URL}/icons8-film-reel-30 1.png` },
      { id: 2, title: 'Series', icon: `${process.env.PUBLIC_URL}/icons8-xbox-series-x-30 1.png` },
      { id: 3, title: 'Reality', icon: `${process.env.PUBLIC_URL}/icons8-cinema-24(2) 1.png` },
      { id: 4, title: 'Games', icon: `${process.env.PUBLIC_URL}/icons8-game-30 1.png` },
      { id: 5, title: 'Documentary', icon: `${process.env.PUBLIC_URL}/icons8-documentary-30 1.png` },
      { id: 6, title: 'Stand-up Comedy', icon: `${process.env.PUBLIC_URL}/icons8-mic-30 1.png` },
    ];

    const faqItems = [
      {
        id: 1,
        question: 'What is BuzzedCinema?',
        icon: `${process.env.PUBLIC_URL}/172525_plus_icon.png`,
      },
      {
        id: 2,
        question: 'Where can I watch?',
        icon: `${process.env.PUBLIC_URL}/172525_plus_icon.png`,
      },
      {
        id: 3,
        question: 'What can I watch on BuzzedCinema?',
        icon: `${process.env.PUBLIC_URL}/172525_plus_icon.png`,
      },
    ];

    const faqDescriptions = [
      {
        id: 1,
        title: 'What is BuzzedCinema?',
        description:
          'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
      },
      {
        id: 2,
        title: 'Where can I watch?',
        description:
          'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at BuzzedCinema.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS or Android app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.',
      },
      {
        id: 3,
        title: 'What can I watch on BuzzedCinema?',
        description:
          'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
      },
    ];

    return (
      <div>
        {/* Trending Section */}
        <h2 className="text-white text-4xl font-jeju-hallasan text-center mt-20 mb-10">Trending</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {movieCovers.slice(0, isSmallScreen ? 3 : 4).map((movie) => (
            <div
              key={movie.id}
              className={`${isMediumScreen ? 'w-36 h-54' : 'w-48 h-72'} bg-cover bg-center cursor-pointer`}
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${movie.image})` }}
              onClick={() => console.log(`Clicked on movie ${movie.id}`)}
            />
          ))}
        </div>

        {/* Most Viewed Section */}
        <h2 className="text-white text-4xl font-jeju-hallasan text-center mt-20 mb-10">Most Viewed</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {movieCovers.slice(0, isSmallScreen ? 3 : 4).map((movie) => (
            <div
              key={movie.id}
              className={`${isMediumScreen ? 'w-36 h-54' : 'w-48 h-72'} bg-cover bg-center cursor-pointer`}
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${movie.image})` }}
              onClick={() => console.log(`Clicked on movie ${movie.id}`)}
            />
          ))}
        </div>

        {/* Recommended Section */}
        <h2 className="text-white text-4xl font-jeju-hallasan text-center mt-20 mb-10">Recommended</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {movieCovers.slice(0, isSmallScreen ? 3 : 4).map((movie) => (
            <div
              key={movie.id}
              className={`${isMediumScreen ? 'w-36 h-54' : 'w-48 h-72'} bg-cover bg-center cursor-pointer`}
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${movie.image})` }}
              onClick={() => console.log(`Clicked on movie ${movie.id}`)}
            />
          ))}
        </div>

        {/* Genres Section */}
        <h2 className="text-white text-4xl font-jeju-hallasan text-center mt-32 mb-10">Genres</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`${isSmallScreen ? 'w-48 h-20' : 'w-64 h-24'} bg-[#140E30] rounded-lg flex items-center justify-center text-white font-kavivanar text-xl hover:bg-[#237ED7] transition-colors`}
              onClick={() => console.log(`Clicked on ${genre.title}`)}
            >
              <img src={genre.icon} alt={genre.title} className="w-8 h-8 mr-2" />
              {genre.title}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        {!isMobile ? (
          <div className="mt-32 mb-10">
            {faqItems.map((faq) => (
              <div
                key={faq.id}
                className="w-3/4 mx-auto bg-white rounded-lg flex items-center justify-between p-6 mb-4"
              >
                <p className="text-black text-2xl font-inter italic font-semibold">
                  {faq.question}
                </p>
                <button className="w-12 h-12 bg-cover bg-center" style={{ backgroundImage: `url(${faq.icon})` }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-32 mb-10 px-4">
            {faqDescriptions.map((faq) => (
              <div key={faq.id} className="mb-8">
                <h3 className="text-white text-xl font-inter font-bold mb-2">
                  {faq.title}
                </h3>
                <p className="text-white text-sm font-inria-sans">
                  {faq.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

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
      <div className="pt-32 pb-32"> 
        <MainContent />
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
