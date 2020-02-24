import React from 'react';
import './App.css';
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Acceuil from './Components/login/acceuil';
import Signup from './Components/login/signup';
import Logout from './Components/login/logout'
import AffichagePlugins from './Components/PluginsETdescriptions/AffichagePlugins'
//import TesterPlugin from './Components/PluginsETdescriptions/'
import withAuth from './Components/login/withAuth'


function App(props) {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           
       
           
       <Route exact path="/" component= {Login} />
         
          <Route exact path="/signup" component= {Signup} />

          <Route exact path="/formulaire" component= {withAuth(Form)} />
           
          <Route exact path="/logout" component= {Logout} />
           
           <Route exact path="/affichagePlugins" component= {withAuth(AffichagePlugins)} />
           
           <Route exact path="/description/:name" component= {withAuth(Description) } />

           <Route exact path="/accueil" component= {Acceuil} />
           
           
           
           

        </Switch>

      </div>

     </BrowserRouter>
   
   </>
  );
  
  
}
export default App;

