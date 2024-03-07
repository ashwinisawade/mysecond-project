import React, { Component, useReducer } from 'react';
import { Routes, Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Login from './Pages/Login';
import Protected from './Pages/Protected';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Home';
import Otp from './Pages/Otp';
import Stopwatch from './Pages/Stopwatch';
import Jsonobject from './component/Jsonobject';
import Postlist from './AxiosComponent';
import AxiosComponent from './AxiosComponent';
import RegistrationForm from './RegistrationForm';
import Event from './component/Event';
import RegexExample from './Regex';
import FormikComponent from './FormikComponent';
import Form from './Form';
import Touch from './Touch';
import ObjectComponent from './ObjectComponent';
import UseReducer from './UseReducer';
import CAB from './CAB';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';
import Objarrray from './component/Objarray';
import Button from './ClickButton';
import Api from './Api';
import ClickButton from './ClickButton';
import ProgressBar from './Progressbar';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const {count, Dispatch}= useReducer(reducer, initialState);
 console.log('count',count)
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<Protected element={<About />} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Objarray" element={<Objarrray />} />
            {/* Add other routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/clickbutton" element={<ClickButton />} />
            <Route path="/api" element={<Api />} />
            <Route path="/progressbar" element={<ProgressBar />} />
          </Routes>
          <CountContext.Provider value={{ CountState:count, Dispatch }}>
            <div className='App'>
              Count - {count}
              <ComponentA/>
              <UseReducer />
              <ComponentB/>
              <ComponentC />
            </div>
          </CountContext.Provider>
        </div>
      </div>
    </Router>
  );
};

export default App;
