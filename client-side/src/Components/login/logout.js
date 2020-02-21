import React from "react"
import {Redirect} from "react-router-dom"
import Axios from "axios"
import { Link, NavLink,Route } from 'react-router-dom'
export default class Logout extends React.Component{

    constructor(){
        super()
        // token remove
        localStorage.removeItem("token")
    }

   
    render(){
        return(
        <div><h2>You have been logout</h2>
        <Link to="/login">Login Again</Link>
        </div>)
        }
}