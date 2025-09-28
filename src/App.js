import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {

  }, []);
  return (
    <div className="App">
      <header className="header">
        <div className="center">
          <div className="header__logo">
            <a href="/" className="app__headerImage">
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
            </a>
          </div>
          <div className="header__loginForm">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
