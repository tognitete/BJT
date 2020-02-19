import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

=======
import Description from './Components/PluginsETdescriptions/description';
>>>>>>> 39bcb45f6ab93faff8d22ca0524595711342d275
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';

//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';
<<<<<<< HEAD
import Login from './Components/login/login';
import Signup from './Components/login/signup'


=======
import AffichagePlugins from './Components/PluginsETdescriptions/affichagePlugins';
>>>>>>> 39bcb45f6ab93faff8d22ca0524595711342d275

function App(props) {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
<<<<<<< HEAD
           
         
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Login />
=======
           <Route exact path="/affichagePlugins" component= {AffichagePlugins } />
           
           <Route exact path="/description/:name" component= {Description } />
           
           

        
          <Route path="/">
            <Form />
>>>>>>> 39bcb45f6ab93faff8d22ca0524595711342d275
          </Route>
        </Switch>
      </div>

     </BrowserRouter>
   
   </>
  );
  
  
}
export default App;

