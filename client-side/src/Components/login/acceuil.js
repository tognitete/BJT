import React from "react"
import {Redirect} from "react-router-dom"
import Axios from "axios"
import { Link, NavLink,Route } from 'react-router-dom'
import Cookies from 'js-cookie';
export default class Acceuil extends React.Component{

    constructor(props){
        super(props)         
    }

    
    render(){
        return(
        <div><h2>Welcome</h2>
        <h2>Plugin Audio</h2>
        <Link to="/formulaire">Ajouter un Plugin</Link>
        </div>)
        }
}