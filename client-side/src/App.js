import React from 'react';

import './App.css';
<<<<<<< HEAD
import Description from './Components/description';
//import LoginForm from './Components/login/login';


//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import {BrowserRouter, Switch, Route} from "react-router-dom"
=======
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';

//import SimpleForm from './Components/form';
//import ReactDOM from 'react-dom';
>>>>>>> 44e894d5d1c6da2ac9ea18b700d23179fa678265
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Signup from './Components/login/signup'


import AffichagePlugins from './Components/PluginsETdescriptions/AffichagePlugins'


<<<<<<< HEAD


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
=======
function App(props) {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           
         
          <Route exact path="/signup" component= {Signup} />
          
          <Route exact path="/login" component= {Login} />
           
           <Route exact path="/affichagePlugins" component= {AffichagePlugins} />
           
           <Route exact path="/description/:name" component= {Description } />
           
           <Route exact path="/" component= {Form}/>
           
        </Switch>

      </div>

     </BrowserRouter>
   
   </>
>>>>>>> 44e894d5d1c6da2ac9ea18b700d23179fa678265
  );
  
  
}
export default App;

