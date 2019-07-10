import React from 'react';
import './styles/App.css';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserLogin from './components/UserLogin'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
}

export default App;
