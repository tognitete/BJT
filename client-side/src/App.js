
import React from 'react';

import './App.css';
import Description from './Components/description';
//import LoginForm from './Components/login/login';


//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import {BrowserRouter, Switch, Route} from "react-router-dom"
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';




import Login from "./Components/login/login";

import  { useState } from "react";
/*function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}*/
function App() {
  return (
    <>
    
    <div className="App">
      <login/>
       
    
  </div>
  
  </>
  );
}
export default App;