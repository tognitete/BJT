import React, { Component } from 'react'
import pluginImage from '../Images/pluginImage.png'
import './description.css' 


export default class Description extends Component {
  render() {
    return (
      <div>
      
            <div className="image">
            <img src={pluginImage} alt={"plugin image"}/> 
            </div>
                   
                     
           <div className="presentation">
               <h1>Nom du plugin <br />Présentation du plugin</h1>
                            
              <p><a>Download plugin </a></p>
            </div>

         
            <div className="desc">

            <h1>Description du plugin </h1>
                            
            </div>

            <div class = "container" className="details">

              <h1>Version : </h1>
              <h1>Description détaillée : </h1>
                
            </div>
      
      
                
                    
                  
          
                
                            
                       
                  
                  
                    </div>
            
    )
  }
  
}