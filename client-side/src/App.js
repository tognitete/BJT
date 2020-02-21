import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import User from './Components/login/User'
import Logout from './Components/login/logout'



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
         
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/logout">
            <Logout /> 
          </Route>
          
         
           <Route exact path="/affichagePlugins" component= {AffichagePlugins } />
           
           <Route exact path="/description/:name" component= {Description } />
           
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>

     </BrowserRouter>
   
   </>
  );
  
  
}
export default App;

