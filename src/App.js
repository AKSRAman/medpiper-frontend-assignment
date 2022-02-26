import './App.css';
import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/home/home';
import Create from './components/create/create';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/dashboard">
      
        <Dashboard />
      </Route>

      <Route path="/create">
      <Create />
      </Route>
    </>
  );
}

export default App;
