import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import "./signup.css";
    import axios from 'axios'

    
    import {Redirect} from "react-router-dom"
    
   
    var passwordHash = require('password-hash');
    
    export default class Signup extends Component {
      constructor(props) {
        super(props);
        
     
        
        this.state = {
          email: "",
          password: "",
          confirmPassword:""
          
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password===this.state.confirmPassword;

      }
      
     
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
       const {email, password, confirmPassword} = this.state
        /*console.log(this.state.email,passwordHash.generate(this.state.password));*/
        console.log(this.state);
        
        this.sendLoginData({email: this.state.email, password: this.state.password})
        
  }  
  sendLoginData(data) {	
		
		axios.post("http://localhost:3001/user",data)
		    .then(response => {
			console.log(response)
		}).catch(error => {

            console.log(error)
		});
	}

      
      
      render() {
        
     
        return (
<div className="Signup" >
 <h2 className="Enregistrer">S'enregistrer</h2><br></br>
          <Form onSubmit={this.handleSubmit}>
  
         <h5 >Entrer votre mail</h5>
             <Form.Group controlId="email" bsSize="large">
            
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <h5 >Entrer votre mot de passe</h5>
              <Form.Group controlId="password" bsSize="large">
                <Form.Control
                  value={(this.state.password)}
                  onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
              <h5 >Rentrer votre mot de passe</h5>
              <Form.Group controlId="confirmPassword" bsSize="large">
                <Form.Control
                  value={this.confirmPassword}
                  onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
        
               <Button
                block
                bsSize="large"
                
                disabled={!this.validateForm()}
                type="submit"
              >
                Signup
              </Button>
        
       
      </Form></div>
    );
  }}
