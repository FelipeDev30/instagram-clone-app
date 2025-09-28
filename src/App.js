import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // this is where the code runs
    console.log(db);
  }, []);
  return (
    <div className="App">
      <h1>Let's build Instagram Clone</h1>
    </div>
  );
}

export default App;
