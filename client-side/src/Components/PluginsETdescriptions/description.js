
import React, { Component } from 'react'
import pluginImage from '../../Images/pluginImage.png'
import './description.css' 
import axios from 'axios'
import {  Button } from 'reactstrap';

import StarsRating from "./starsRating";
//import TestCommentAPP from './affichageComment'
import AffichageCommentaire from './affichageComment';



export default class Description extends Component {
  constructor(props) {

    

    super(props)
    
      
      this.state = {
			
        data: [],
        fichier : null
      }

      this.getPluginData(this.props.match.params.name)

      console.log("this.props.match.params.name",this.props.match.params.name)
      
  }

  getPluginData(nom) {
    axios.get("http://localhost:3001/plugin/"+nom)
    .then(response => {
    console.log("data",response.data[0])
    this.setState({
      data: response.data[0]

      

  })

 
  console.log("this.state.data",this.state.data)
}).catch(error => {

    console.log(error)
});
}
getImagePlugin(image){
  return 'http://localhost:8081/uploads/'+image

}
getPLuginUrl(pluginName){

  axios.get("http://localhost:3001/plugin/"+pluginName)
      .then(response => {
      console.log(response)
      this.setState({
        fichier: response.data.fichier
  
    })
    console.log("pluginName",this.state.data)
  }).catch(error => {
  
      console.log(error)
                   });
}
testPlugin() {
  window.open('http://localhost:8080/plugin-services/test?pluginName=freeverbTEST');
}
tryPlugin() {

  

  window.open('http://localhost:8080/plugin-services/try?pluginName=freeverbTEST');
}


download() {

 

  window.open("https://codeload.github.com/tognitete/BJT/zip/master")


}

  render() {
    return (
     <div>
        <div class="header">
        
              <h1>Presentation of my plugin  {this.props.match.params.name}</h1>  
        </div>

        <div class="row">   
        
                <div class="column">   
                        <img className="imgPlugin" src={this.getImagePlugin(this.state.data.pictures)} alt={"plugin image"}/>
                        <h1>     Plugin description  {this.state.data.description}  </h1>
                        <br/> 
                        <br/> 
              
                         <StarsRating/>
                
                         
               </div>  
                
                <div class="column" >
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <h1>Plus d'informations : </h1>
                  <h1>- Version : {this.state.data.version}</h1>
                  <h1>- Topic : {this.state.data.topic}</h1>
                  <h1>- Tag : {this.state.data.tag}</h1>
                  <h1>- Tutoriel : {this.state.data.tutoriel}</h1>
                </div>
        
                

  </div>
  <div class="footer">


 
                   <button class="button"onClick={this.tryPlugin}> Try {this.props.match.params.name}</button>
     
                   <button class="button" onClick={this.download}>Download {this.props.match.params.name} </button>
                   <button class="button" onClick={this.testPlugin}>Test {this.props.match.params.name} </button>
                   

                   <br/>     
                   <br/>     
                   <br/>  
                   <br/>    
                   <AffichageCommentaire nomPlugin={this.props.match.params.name}/>

  </div>  
    
  </div>   
            
    )
  }

 
  
}

