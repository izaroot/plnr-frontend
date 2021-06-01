import React, { Component } from "react"
import { useHistory } from "react-router"
import NavBar from "./NavBar"
import Profile from "./Profile"

class HomeView extends Component {


    render() {
        
        return (
            <div>
            <NavBar />
            <Profile />
            </div>
        )
    }
    
}

export default HomeView