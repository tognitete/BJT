import React, { Component } from 'react'
import pluginImage from '../Images/pluginImage.png'
import './description.css' 
import axios from 'axios'


export default class Description extends Component {
  render() {
    return (
      <div>
      
            <div className="image">
            <img src={pluginImage} alt={"plugin image"}/> 
            <div className="desc">

            <h1>Description du plugin </h1>
                            
            </div>

            <div class = "container" className="details">

              <h1>Version : </h1>
              <h1>Description détaillée : </h1>
                
            </div>
            </div>
                   
                     
           <div className="presentation">
              <h1>Nom du plugin <br />Présentation du plugin</h1>
                            
                          </div>
                  
                    </div>
            
    )
  }

  getPluginData() {
    axios.get("http://localhost:3001/plugin/manel")
    .then(response => {
    console.log(response)
}).catch(error => {

    console.log(error)
});
}
  
}