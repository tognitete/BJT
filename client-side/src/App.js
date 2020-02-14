import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/description';
import Navbar from './Components/Navbar/Navbar' ;
import { BrowserRouter , Switch , Route } from 'react-router-dom';

//import SimpleForm from './Components/form';
import ReactDOM from 'react-dom';
//import SimpleForm from './Components/form';
import Form from './Components/formulaire/formulaire';

function App() {
  return (
    <>
     <BrowserRouter>

       <Navbar/>

       <div className="App">
       <Switch>
           <Route path="/description">
            <Description />
          </Route>
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