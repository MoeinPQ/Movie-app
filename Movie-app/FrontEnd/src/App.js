import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import LoginPage from './Login';
import SignUp from './SignUP';
import MovieOverview1 from './MovieOverview1';
import './index.css'; // ÙˆØ§Ø±Ø¯ Ú©Ø±Ø¯Ù† ÙØ§ÛŒÙ„ index.css

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/godfather' element={<MovieOverview1 />} />
      </Routes>
    </Router>
  );
}

export default App;