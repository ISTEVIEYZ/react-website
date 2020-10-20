import React from 'react';
import {  Route, Switch, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import { TransitionGroup, CSSTransition } from "react-transition-group";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}>
              <Switch location={location}>
                  <Route path="/" component={Home} exact />
                  <Route path="/resume" component={Resume} />
                  <Route component={Error} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
        </main>
    </div>
  );
}

export default App;
