import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import Bootstrap from "react-bootstrap";
    import "./login.css";
    
    var passwordHash = require('password-hash');
    export default class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
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
        console.log(this.state.email,passwordHash.generate(this.state.password));
      }

      render() {
        return (

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
        );
      }
    }
    