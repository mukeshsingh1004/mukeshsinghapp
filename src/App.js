import React from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, NavbarBrand, Spinner} from 'react-bootstrap';
import HomePage from './components/home';
import FunctionsPage from './components/functions';
import AboutPage from './components/about';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="md">
          <Spinner animation="grow" varient="success"/>
            <NavbarBrand to="/">
              <strong style={{color: 'white'}}>MukeshSingh.com</strong>
            </NavbarBrand>
          <Spinner animation="grow" varient="success"/>
        </Navbar>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/functions">Functions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </NavItem>
        </Nav>
      </header>

      <div className="container-fluid pt-3">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route path="/functions" component={FunctionsPage}/>
        <Route path="/about" component={AboutPage}/>
      </div>

      <footer className="App-footer">
        <div>
          <p>Developed By: Mukesh Singh</p>
        </div>
      </footer>    
    </div>
  );
}

export default App;
