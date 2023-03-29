import React, { useState } from 'react';
import Gallery from './Gallery';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className='toggle-switch'>
        <label className='toggle-switch-label'>
          <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
          <span className='icons'>{isDarkMode ? <FaMoon /> : <FaSun />}</span>
        </label>
      </div>
      <h1 className="title">Midjourney Gallery</h1>
      <Gallery />
      <footer>
        <hr/>
        <p>&copy; Shubham Singh 2023.</p>
      </footer>
    </div>
  )
}

export default App
