import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/resume" component={Resume} />
                <Route component={Error} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
