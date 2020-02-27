import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'


export default function withAuth(ComponentToProtect,token) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

      componentDidMount() {
        console.log("Accueil",token)
        const newToken = {"token":token}
        axios.post("http://localhost:3001/checkToken",newToken)
          .then(res => {
            if (res.status === 200) {
              this.setState({ loading: false });
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });
      }
    
      
  

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return <ComponentToProtect {...this.props} token={token} />;
    }
  }
}