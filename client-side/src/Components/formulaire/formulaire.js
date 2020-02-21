import React, { Component } from 'react'
import './formulaire.css'
import ImageUploader from 'react-images-upload'
import axios from 'axios'

class Form extends Component {
	constructor(props) {

		

		super(props)
		
		this.state = {
			nom: '',
			version: '',
            description: '',
			pictures: [],
		    opensource: false,
		    topic: '',
		    tag: '',
			tutoriel: '',
			lien:''
		}
		this.onDrop =  this.onDrop.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		//console.log('this vaut :', this); 


	}

	onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
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
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		console.log(this.state);
		event.preventDefault()
		this.sendPluginData(this.state)
	}
	
	sendPluginData(data) {	
		axios.post("http://localhost:3001/plugin",data)
		    .then(response => {
			console.log(response)
		}).catch(error => {

            console.log(error)
		});
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
 
	render() {
		const { Nom, Version, description, topic, Tag, Tutoriel, lien } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="Nom_plugin">
					<label> Nom du plugin </label>
					<input 
						type="text"
						value={this.state.nom}
						onChange={this.handleUsernameChange}
						
						isRequired/>
				</div>
                <div>
					<label>Version </label>
					<input
						type="text"
						value={this.state.version}
						onChange={this.handleVersionChange}
					/>
				</div>
				<div>
					<label>Description</label>
					<textarea
						value={this.state.description}
						onChange={this.handleCommentsChange}
					/>
				</div>
                 <div>
				 <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
				 </div>
                <div>
                <label>
                Le logiciel est open source:
				<div className="radio">
            <input
              name="opensource"
              type="radio"
              checked={this.state.opensource}
			  onChange={this.handleRadioChange} 
			  value = "oui"
			  checked={this.state.opensource === 'oui'}/> Oui

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
					<select value={this.state.topic} onChange={this.handleTopicChange}>
					    <option value=""></option>
						<option value="modulation">Modultion</option>
						<option value="distorsion">Distorsion</option>
						<option value="egalisation">Egalisation</option>
                        <option value="reverb">reverb</option>
                        <option value="accordeur">accordeur</option>
					</select>
				</div>
				<div>
					<label>Tag </label>
					<input
						type="text"
						value={this.state.tag}
						onChange={this.handleTagChange}
					/>
				</div>
				<div>
					<label>Tutoriel </label>
					<input
						type="text"
						value={this.state.tutoriel}
						onChange={this.handleTutorielChange}
					/>
				</div>
                <div>
					<label>Lien vers le plugin</label>
					<input
						type="url"
						value={this.state.lien}
						onChange={this.handleLienChange}
					/>
				</div>
				<button type="submit">Soumettre</button>
				
				
			</form>
		)
	}
}

export default Form;

