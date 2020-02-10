
import React from 'react';
class SimpleForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        fullName: ""
      };
    }
   
    handleSubmitForm(event) {
      alert("Full Name: " + this.state.fullName);
      event.preventDefault();
    }
   
    handleChange(event) {
      var value = event.target.value;
   
      this.setState({
        fullName: value
      });
    }
   
    render() {
      return (
        <form onSubmit={event => this.handleSubmitForm(event)}>
          <label>
            Full Name:
            <input
              type="text"
              value={this.state.fullName}
              onChange={event => this.handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" />
          <p>{this.state.fullName}</p>        
        </form>
      );
    }
  }

export default SimpleForm;
   
  // Render
 // ReactDOM.render(<SimpleForm />, document.getElementById("form1"));
 class EssayForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        content: ""
      };
    }
   
    handleSubmitForm(event) {
      alert("Textarea Content: " + this.state.content);
      event.preventDefault();
    }
   
    handleChange(event) {
      var value = event.target.value;
   
      this.setState({
        content: value
      });
    }
   
    render() {
      return (
        <form onSubmit={event => this.handleSubmitForm(event)}>
          <label>Content</label>
          <br />
          <textarea cols="45" rows="5"
            value={this.state.content}
            onChange={event => this.handleChange(event)} />
          <br />
          <input type="submit" value="Submit" />
          <p>{this.state.content}</p>
        </form>
      );
    }
  }
   
  // Render
  //ReactDOM.render(<EssayForm />, document.getElementById("form1"));