import React from 'react';
import './App.css';
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import Logout from './Components/login/logout'
import AffichagePlugins from './Components/PluginsETdescriptions/affichagePlugins'


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
          
                      
           
           <Route exact path="/" component= {Form}/>
           

        </Switch>

      </div>

     </BrowserRouter>
   
   </>
  );
  
  
}
export default App;

