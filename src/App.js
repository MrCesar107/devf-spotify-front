import React from 'react';
import './styles/App.css';

// Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Component
import ProtectedRoute from './components/ProtectedRoute'
import UserLogin from './components/UserLogin'
import Home from './components/Home'
import Logout from './components/forms/Logout'
import UserSignup from './components/UserSignup'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { withApollo } from 'react-apollo'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ UserLogin } />
        <ProtectedRoute
          exact
          path="/home"
          component={ Home } />
        <Route path="/signup" component={UserSignup}/>
        <Route path="/logout" component={Logout} />
      </Router>
    </div>
  );
}

export default withApollo(App)
