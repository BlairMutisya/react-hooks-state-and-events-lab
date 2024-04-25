import React, { useState } from 'react';
import '../index.css'; // Assuming you have CSS for dark and light mode

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* Other components go here */}
    </div>
  );
}

export default App;
