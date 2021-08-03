import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import Login from './components/Login/Login.js'
import Preferences from './components/Preferences/Preferences.js';

function App() {
  const [token, setToken] = useState();

if(!token) {
  return <Login setToken={setToken} />
}

  return (
    <div className="wrapper">
      <h1>Status of community services</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;