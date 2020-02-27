import React from 'react';
import './App.css';
import Description from './Components/PluginsETdescriptions/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route ,Redirect } from 'react-router-dom';
import Form from './Components/formulaire/formulaire';
import Login from './Components/login/login';
import Acceuil from './Components/login/acceuil';
import Signup from './Components/login/signup';
import Logout from './Components/login/logout'
import AffichagePlugins from './Components/PluginsETdescriptions/AffichagePlugins'
//import TesterPlugin from './Components/PluginsETdescriptions/'
import withAuth from './Components/login/withAuth'



export default class extends React.Component{

  constructor(props) {
    super(props);

     
    this.state = {

        token : ""
    }


  }

  setToken(newToken) {

      this.setState({token:newToken})
  }

  render() {

  return (


    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           
       
           
      

         <Route exact path="/" render={(props) => <Login {...props} data={{token:this.state.token , setToken:this.setToken.bind(this)}} />}/>
         
          <Route exact path="/signup" component= {Signup} />

          <Route exact path="/formulaire" component= {withAuth(Form,this.state.token)} />
           
          <Route exact path="/logout" component= {Logout} />
           
           <Route exact path="/affichagePlugins" component= {withAuth(AffichagePlugins,this.state.token)} />
           
           <Route exact path="/description/:name" component= {Description } />

           <Route exact path="/accueil" component= {withAuth(Acceuil,this.state.token)} />
          
           <Route exact path="/tester">
          

            
           </Route>
           
           
           
           

        </Switch>

      </div>

     </BrowserRouter>
   
   </>
  );
  
  
}
}

