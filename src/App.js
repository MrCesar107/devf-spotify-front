import React from 'react';
import './styles/App.css';

// Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Component
import UserLogin from './components/UserLogin'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { withApollo } from 'react-apollo'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ UserLogin } />
        <Route path="/home" component={ Home }/>
      </Router>
    </div>
  );
}

export default withApollo(App)
