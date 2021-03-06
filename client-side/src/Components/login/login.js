import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import Bootstrap from "react-bootstrap";
    import {Redirect} from "react-router-dom"
    import "./login.css";
    import axios from 'axios'
   // const token = localStorage.getItem("token")
   // var passwordHash = require('password-hash');
    export default class Login extends Component {
      constructor(props) {
        super(props);
        
        /*let loggedIn=true
        if(token==null){
          loggedIn=false
        }*/
        this.state = {
          email: "",
          password: "",
          loggedIn:false,
          redirect: false
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
      
      signupForm = event => { window.location.href='/signup/'
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
        //const email = this.state.email
        //const password = passwordHash.generate(this.state.password)
        /*console.log(this.state.email,passwordHash.generate(this.state.password));*/
        /*try {
          
          localStorage.setItem("token", token)
          this.setState({
              loggedIn: true
          })
      } catch (err) {
          this.setState({
              error: err.message
          })
      }*/

        this.UserAuthentifiaction({email:this.state.email,password:this.state.password})
  }  
     
   UserAuthentifiaction(data) {

    axios.post("http://localhost:3001/auth",data)
    .then(res => {
      if (res.status === 200) {
        this.setState({ loggedIn: true });
        console.log("res",res.data)
        this.props.data.setToken(res.data)
        this.props.history.push('/accueil');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });

  }

    /*fetch('http://localhost:3001/auth', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/accueil');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }*/
      
      render() { 
        
        return (

          <>

          <div className="Login" >
<h2 className="Connexion">Connexion</h2><br></br>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" bsSize="large">
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
                <Form.Control
                  value={(this.state.password)}
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
                Login
              </Button>
              <Button
                block
                bsSize="large"
                onClick={this.signupForm }
                type="submit"
              >
                Signup
              </Button>
            </Form>
          </div>

          </>
        );
       }
 
        
      
    }

