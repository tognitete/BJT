import React, { Component } from 'react'
import './formulaire.css'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

const endpoint = 'http://localhost:3001/plugin'

class Form extends Component {
	constructor(props) {

		

		super(props)
		
		this.state = {
			nom: '',
			version: '',
            description: '',
			pictures: null,
		    opensource: false,
		    topic: '',
		    tag: '',
			tutoriel: '',
			lien:'',
			errors: {},
			invalid: false,
			fichier: null,
			loaded : 0
		}
		this.onDrop =  this.onDrop.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleFichier=this.handleFichier.bind(this);



	}

	onDrop(picture) {
        this.setState({
            pictures: picture[0],
        });
    }
 

	handleUsernameChange = event => {
		this.setState({
			nom: event.target.value
			
		}) 
	}
	handleVersionChange = event => {
		this.setState({
			version: event.target.value
			
		}) 
	}
	handleCommentsChange = event => {
		this.setState({
			description: event.target.value
		})
	}
	handleTagChange = event => {
		this.setState({
			tag: event.target.value
			
		}) 
	}
	handleTutorielChange = event => {
		this.setState({
			tutoriel: event.target.value
			
		}) 
	}

	
	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		console.log(this.state);
		event.preventDefault()
		console.log(this.state);

		this.checkPluginExists()
		const data = new FormData() 

		for ( var key in this.state ) {
			data.append(key, this.state[key]);
			
		}

		
		this.sendPluginData(data)
		//window.location.href='/affichagePlugins'
	}
	
	sendPluginData(data) {	
		const config = {     
			headers: { 'content-type': 'multipart/form-data' }
		}
		axios.post("http://localhost:3001/plugin",data,config)
		    .then(response => {
			console.log(response)
		}).catch(error => {

            console.log(error)
		});
	}

	/* sendPluginData(data) { 
        const headers = { 'content-type': 'multipart/form-data' }
        
        fetch("http://localhost:3001/plugin", {
            method: "post",
            headers: headers,
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(res => {
              if (res.error) {
                this.setState({ loading: false, error: res.error });
              } else {
              }
            })
    
     
		}*/
		
		handleselectedFile = event => {
			this.setState({
			  fichier: event.target.files[0]
			})
		  }
    handleInputChange(event) {
		
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
	  }
	  handleRadioChange(changeEvent) {
		this.setState({
		  opensource: changeEvent.target.value
		});
	  }
	  handleLienChange = event => {
		this.setState({
			lien: event.target.value
			
		}) 
	}

	handleFichier(event) {
		this.setState({
		  fichier: event.target.value
		})
	  }


  checkPluginExists() {
	  
    axios.get("http://localhost:3001/plugin/"+this.state.nom)
    .then(response => {
    console.log(response);
        if (response.length>0){
			alert("Ce plugin existe deja")
		}

			
		    

  })
}
  
 
	render() {
		const { Nom, Version, description, topic, Tag, Tutoriel, lien } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="Nom_plugin">
					
					<label> Nom du plugin </label>
					<div>
					<input 
						type="text"
						value={this.state.nom}
						onChange={this.handleUsernameChange}
						
						isRequired/>
				</div></div>
                <div>
					<label>Version </label>
					<div>
					<input
						type="text"
						value={this.state.version}
						onChange={this.handleVersionChange}
					/>
				</div></div>
				<div>
					<label>Description</label>
					<div>
					<textarea
						value={this.state.description}
						onChange={this.handleCommentsChange}
					/>
				</div></div>
                 <div>
				 <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
				 </div>
                <div >
                <label>
                Le logiciel est open source:
				
				<div className="radio" >
					<div className="rb1">
		     <input 

              name="opensource"
              type="radio"
              checked={this.state.opensource}
			  onChange={this.handleRadioChange} 
			  value = "oui"
			  checked={this.state.opensource === 'oui'}/> Oui</div>

             <input
			 
              name="opensource"
              type="radio"
              checked={this.state.opensource}
			  onChange={this.handleRadioChange} 
			  value = "non"
			  checked={this.state.opensource === 'non'}/> Non
			  </div>
          </label></div>

				<div>
                <label>Topic</label>
				<div>
					<select value={this.state.topic} onChange={this.handleTopicChange}>
					    <option value=""></option>
						<option value="modulation">Modultion</option>
						<option value="distorsion">Distorsion</option>
						<option value="egalisation">Egalisation</option>
                        <option value="reverb">reverb</option>
                        <option value="accordeur">accordeur</option>
					</select>
				</div></div>
				<div>
					<label>Tag </label>
					<div>
					<input
						type="text"
						value={this.state.tag}
						onChange={this.handleTagChange}
					/>
				</div></div>
				<div>
				
					<label>Tutoriel </label>
					<div>
					<input
						type="text"
						value={this.state.tutoriel}
						onChange={this.handleTutorielChange}
					/>
				</div></div>
                <div>
					<label>Lien vers le plugin</label>
					<div>
					<input
						type="url"
						value={this.state.lien}
						onChange={this.handleLienChange}
					/>
				</div></div>
			  <div className="Upload">
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
          </div>
        
        
				<button type="submit">Soumettre</button>
				
				
			</form>
		)
	}
}

export default Form;

