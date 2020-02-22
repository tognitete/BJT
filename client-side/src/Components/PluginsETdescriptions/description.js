
import React, { Component } from 'react'
import pluginImage from '../../Images/pluginImage.png'
import '../PluginsETdescriptions/description.css' 
import axios from 'axios'
import {  Button } from 'reactstrap';






export default class Description extends Component {
  constructor(props) {

		super(props)
      this.getPluginData(this.props.match.params.name)


      this.state = {
			
        data: []
      }

  }
  getPluginData(nom) {
    axios.get("http://localhost:3001/plugin/"+nom)
    .then(response => {
    console.log(response)
    this.setState({
      data: response.data[0]

  })
  console.log(this.state.data)
}).catch(error => {

    console.log(error)
});
}
getImagePlugin(image){
  return 'http://localhost:8081/uploads/'+image

}



  render() {
    return (
      <div>
      
            <div className="image">
                <img src={this.getImagePlugin(this.state.data.pictures)} alt={"plugin image"}/> 
              <div className="desc">
                <h1>Description du plugin : {this.state.data.description}</h1>
                            
              </div>

              <div class = "container" className="details">
                <h1>Plus d'informations : </h1>
                <h1>- Version : {this.state.data.version}</h1>
                <h1>- Topic : {this.state.data.topic}</h1>
                <h1>- Tag : {this.state.data.tag}</h1>
                <h1>- Tutoriel : {this.state.data.tutoriel}</h1>
                
                <Button style={{ width: '10rem' }} onClick={event =>  window.location.href='/testerPlugin/'}>Tester {this.state.data.name} </Button>
                
              </div>
            
            </div>
                   
                     
           <div className="presentation">
              <h1>Présentation du plugin {this.props.match.params.name}</h1>   
                  
            </div>
            
    </div>
    
    
      
            
    )
  }

 
  
}

