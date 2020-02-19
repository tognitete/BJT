import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';

//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Signup from './Components/login/signup'



function App() {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           
         
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>

     </BrowserRouter>
   
   </>
  );
}
export default App;