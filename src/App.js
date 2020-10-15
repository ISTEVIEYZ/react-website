import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </main>
    </div>
  );
}

export default App;
