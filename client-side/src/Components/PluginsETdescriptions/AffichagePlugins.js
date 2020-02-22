import React, { Component } from 'react'
import pluginImage from '../../Images/pluginImage.png'
//import { Redirect } from 'react-router-dom'
//import {  NavLink } from 'react-router-dom'
//import './AffichagePlugins' 
import './description.css' 
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col, Button } from 'reactstrap';




export default class AffichagePlugins extends Component {
 
  constructor(props) {

		super(props)
		
      this.getAllPlugins()

    this.state = {
    
      data: []
    }
		
    } 
    
  getAllPlugins() {
    axios.get("http://localhost:3001/plugins")
      .then(response => {
      console.log(response)
      this.setState({
        data: response.data
  
    })
    console.log(this.state.data)
  }).catch(error => {
  
      console.log(error)
                   });
  }

  getImagePlugin(image){
    return 'http://localhost:8081/uploads/'+image
  
  }

 GetRow(){
   let image = ""
 const tabShow =  this.state.data.map(function(d, i){
    console.log('test');
    image = 'http://localhost:8081/uploads/'+d.pictures
    return <div key={i} >   
    <Col>


       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{d.nom}</Card.Title>
            <Card.Text>
                {d.description}
            </Card.Text>
            <Button style={{ width: '10rem' }} onClick={event =>  window.location.href='/description/'+d.nom}>C</Button>
          </Card.Body>
        </Card>
    </Col> 
            </div>
                         })
  
  return tabShow ;

 }
  
 
 render() {
    return (
     
              <div >
                  <h2>Web Audio Modules</h2>
                  <h4>Showing all results</h4>
                  <Container>
                    <Row>
                    
                        {
                        this.GetRow()
                        
                        }

                  
                    </Row>
                  </Container>  
              </div> 
     
              )
  }
  
}