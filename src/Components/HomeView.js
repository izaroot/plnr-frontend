import React, { Component } from "react"
import { useHistory } from "react-router"
import NavBar from "./NavBar"
import Profile from "./Profile"
import TaskContainer from "./TaskContainer"

class HomeView extends Component {


    render() {
        
        return (
            <div>
                <NavBar />
                <Profile />
                <TaskContainer user={this.props.user}/>
            </div>
        )
    }
    
}

export default HomeView