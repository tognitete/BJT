import React, { Component } from 'react'
import pluginImage from '../../Images/pluginImage.png'
//import { Redirect } from 'react-router-dom'
import {  NavLink } from 'react-router-dom'

//import './description.css' 
//import axios from 'axios'




export default class AffichagePlugins extends Component {
 
  constructor(props) {

		super(props)
		
		this.state  = {
      redirect: false
    }
		
		} 
 
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <NavLink to='/'></NavLink>
    }
  }
  render() {
    return (
     
<div >
     <h2>Web Audio Modules</h2>
     <h4>Showing all results</h4>
     <div class ="conteneur">
     <div class="plugins">
       <div class="plugin1">
       <img src={pluginImage} alt={"plugin image"}/> 
               
       </div>
     </div>
     <div class="bouton"><button type="consulter">Consulter ce plugin</button>
     </div>
     <div class="plugins">
       <div class="plugin2">
       <img src={pluginImage} alt={"plugin image"}/> 
               
       </div>
     </div>
           <div class="bouton"><button type="consulter">Consulter ce plugin</button></div>
     <div class="plugins">
       <div class="plugin3">
       <img src={pluginImage} alt={"plugin image"}/> 
           
       
       </div>
     </div>
    <div> <button onClick={event =>  window.location.href='/description'}>Click</button></div>
     <div class="plugins">
       <div class="plugin4">
       <img src={pluginImage} alt={"plugin image"}/> 
                        </div>
     </div>
           <div class="bouton"><button type="consulter">Consulter ce plugin</button></div>
     
           </div>
     
     </div>         
    )
  }


  
}