import React, { Component } from 'react'
import pluginImage from '../../Images/pluginImage.png'
import '../PluginsETdescriptions/description.css' 
import axios from 'axios'




export default class Description extends Component {
  constructor(props) {

		super(props)
      this.getPluginData()

      this.state = {
			
        data: []
      }

  }
  getPluginData() {
    axios.get("http://localhost:3001/plugin/pianoA")
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
    <h1>Description détaillée : {this.state.data.description}</h1>
                
            </div>
            
            </div>
                   
                     
           <div className="presentation">
              <h1>Nom du plugin <br />Présentation du plugin</h1>
                            
                          </div>
                  
                    </div>
      
            
    )
  }

 
  
}