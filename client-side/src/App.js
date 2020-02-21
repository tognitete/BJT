import React from 'react';
import './App.css';
<<<<<<< HEAD
import Description from './Components/description';
//import LoginForm from './Components/login/login';


//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import {BrowserRouter, Switch, Route} from "react-router-dom"
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';

//import SimpleForm from './Components/form';
//import ReactDOM from 'react-dom';
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import TesterPlugin from './Components/PluginsETdescriptions/testerPlugin'
import Signup from './Components/login/signup'


=======
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import Logout from './Components/login/logout'
>>>>>>> 8fa6a5b0bfc427ceaa1df8507bb27358bcbe0146
import AffichagePlugins from './Components/PluginsETdescriptions/AffichagePlugins'


function App(props) {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           
       <Route exact path="/login" >
            <Login /> 
            </Route>
         

          <Route exact path="/signup" component= {Signup} />
          
          <Route exact path="/login" component= {Login} />

          <Route exact path="/logout" component= {Logout} />
           
           <Route exact path="/affichagePlugins" component= {AffichagePlugins} />
           
           <Route exact path="/description/:name" component= {Description } />
           <Route exact path="/testerPlugin" component= {TesterPlugin } />
           
           
           <Route exact path="/" component= {Form}/>
           

        </Switch>

      </div>

     </BrowserRouter>
   
   </>
<<<<<<< HEAD
=======

>>>>>>> 8fa6a5b0bfc427ceaa1df8507bb27358bcbe0146
  );
  
  
}
export default App;

