import React from 'react';
import {  Redirect, Route, Switch, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
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
                    <Route exact path="/"  >
                      <Redirect to="/projects"/>
                    </Route>
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={Resume} />
                    <Route component={Error} />
                </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </main>
    </div>
  );
}

export default App;
