import React, { Component } from 'react'
import pluginImage from 'D:/Projets Master/Programmable Web/Projet/BJT/client-side/src/Images/pluginImage.png'
//import './description.css' 
//import axios from 'axios'




export default class AffichagePlugins extends Component {
 
  render() {
    return (
     
  
      
      <div>
         
            <div className="titre" >  Web Audio Modules 
            </div>
      
            <div className="image">
            <img src={pluginImage} alt={"plugin image"}/> 
            </div>

            <div className="image1">
            <img src={pluginImage} alt={"plugin image"}/> 
            </div> 





             
      </div>
      
            
    )
  }


  
}